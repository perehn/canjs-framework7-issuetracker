define(['mtemplate!app/pages/editissuepage/editissuepage.html', 
        'mtemplate!app/pages/editissuepage/pagenavbar.html',
        'basecontroller'],
	
function(template, navbarTemplate, BaseController){

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
	
	renderNavbar : function(navbar){
		var self = this, options = this.options;
		
		options.attr('navbarTitle', options.issue.id==null?'Create Issue' : 'Edit Issue');
		
		navbar.html(navbarTemplate(options));
		
	},

	
	'a#cancel click' : function(el,ev){
		ev.stop();
	
		this.element.trigger('close');
	},
	
	'a#save click' : function(el,ev){
		ev.stop();
		var self = this;
		
		this.options.issue.save().done(function(issue){
			issue.backup();
			self.element.trigger('close');
		});
	},


	destroy : function(){
		this.options.issue.restore();
		this._super();
	}

});



})
