define(['can'],
function(can){


can.Model.extend('Issue',
/* @Static */
{
	findAll : 'GET /issue',
	create  : 'POST /issue',
	update  : 'PUT /issue/{id}',
},
/* @Prototype */
{
	
	status : 'todo',
	comments : [],
	
	init : function(){
		var self = this;
		this.bind("status", function(ev, to, from){
		    self.statusChange = {to : to, from : from};
		})
	},
	
	addComment : function(comment){
		this.comments.push(comment);
	},
	
	save : function(){
		var self = this;
		if(this.id == null){ // If new created
			this.statusChange = {to: this.status};
		}
		return this._super().done(function(){
			var statusChange = self.statusChange;
			if(statusChange && statusChange.to != statusChange.from){
				
				can.trigger(Issue, 'statuschange', {
					from : self.statusChange.from,
					to : self.statusChange.to,
					issue : self
				})
				self.statusChange = null;
			}
		})
	},
	restore : function(){
		this.statusChange = null;
		this._super();
	},
	
	nextStatus : function(){
		switch(this.attr('status')){
			case 'todo': return 'inprogress';
			case 'inprogress': return 'done';
			case 'done': return null;
		}
	}
});


Issue.List = Issue.List.extend({
	
}, {
	withStatus : function(status) {
		return this.grep(function(issue) {
			return issue.status == status;
		});
	}
})

})
