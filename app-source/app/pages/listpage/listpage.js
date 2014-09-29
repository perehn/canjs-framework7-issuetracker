define(['mtemplate!app/pages/listpage/listpage.html', 
        'mtemplate!app/pages/listpage/pagenavbar.mustache',
        'basecontroller'],
	
function(template, navbarTemplate, BaseController){

BaseController.extend('Page.Listpage',
/* @Static */
{
	
},
/* @Prototype */
{
	template : template,
	
	getData : function(){
		return {
			items : TestModel.findAll()
		}
		
	},
	preRender : function(options){
		
	},
	postRender : function(options){
	
	},
	'.item-link click' : function(el,ev){
		ev.stop();
		App.openPage(Page.Itempage, {item : el.model()})
	},
	renderNavbar : function(navbar){
		navbar.html(navbarTemplate(this.options));
	
		this.on(navbar.find('a#create-new'), 'click', function(ev){
			ev.stop();
			App.openPopup(Page.Edititempage, {item : new TestModel()})
		})
	}

});



})
