define(['mtemplate!app/pages/editissuepage/editissuepage.html', 
        'basecontroller'],
	
function(template, BaseController){

BaseController.extend('Page.EditIssuePage',
/* @Static */
{
	
},
/* @Prototype */
{
	template : template,
	
	preRender : function(options){
		
		this.options.issue.backup();
	},

	
	'a#cancel click' : function(el,ev){
		ev.stop();
	
		this.element.trigger('close');
	},
	
	'a#save click' : function(el,ev){
		ev.stop();
		var self = this;
		this.options.issue.backup();
		this.options.issue.save().done(function(){
			self.element.trigger('close');
		});
	},


	destroy : function(){
		this.options.issue.restore();
		this._super();
	}

});



})
