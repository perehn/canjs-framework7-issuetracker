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
	
	getData : function(){
		
		
	},

	renderNavbar : function(navbar){
		navbar.html(navbarTemplate(this.options));
		
		this.on(navbar.find('a#edit'), 'click', function(){
			console.log('navbar click');
		})
	},
	
	preRender : function(options){
		
	},
	postRender : function(options){
	
	}

});



})
