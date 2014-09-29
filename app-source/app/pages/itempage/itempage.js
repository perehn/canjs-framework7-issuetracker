define(['mtemplate!app/pages/itempage/itempage.html', 
        'mtemplate!app/pages/itempage/pagenavbar.mustache',
        'basecontroller'],
	
function(template, navbarTemplate, BaseController){

BaseController.extend('Page.Itempage',
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
			App.openPopup(Page.Edititempage, {item : self.options.item})
		})
	}
	
	

});



})
