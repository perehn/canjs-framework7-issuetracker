define(['mtemplate!app/pages/listpage/listpage.html', 
        'mtemplate!app/pages/listpage/pagenavbar.html',
        'basecontroller'],
	
function(template, navbarTemplate, BaseController){

BaseController.extend('Page.ListPage',
/* @Static */
{
	
},
/* @Prototype */
{
	template : template,
	
	getData : function(){
		return {
			issues : Issue.findAll()
		}
		
	},
	preRender : function(options){
		
	},

	renderNavbar : function(navbar){
		navbar.html(navbarTemplate(this.options));
	
		this.on(navbar.find('a#create-new'), 'click', function(ev){
			ev.stop();
			App.openPopup(Page.EditIssuePage, {issue : new Issue()})
		})
	},
	'.item-link click' : function(el,ev){
		ev.stop();
		App.openPage(Page.IssuePage, {issue : el.model()})
	},
	
	'{Issue} created' : function(ev, a, issue){
		this.options.issues.push(issue);
	}

});



})
