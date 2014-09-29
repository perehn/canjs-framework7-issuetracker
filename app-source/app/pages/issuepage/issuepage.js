define(['mtemplate!app/pages/issuepage/issuepage.html', 
        'mtemplate!app/pages/issuepage/pagenavbar.html',
        'basecontroller'],
	
function(template, navbarTemplate, BaseController){

BaseController.extend('Page.IssuePage',
/* @Static */
{
	
},
/* @Prototype */
{
	template : template,
	
	renderNavbar : function(navbar){
		var self = this;
		navbar.html(navbarTemplate(this.options));
		
		this.on(navbar.find('a#edit'), 'click', function(ev){
			ev.stop();
			App.openPopup(Page.EditIssuePage, {issue : self.options.issue})
		})
	}
	
	

});



})
