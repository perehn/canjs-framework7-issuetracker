define(['mtemplate!app/pages/listpage/listpage.html', 
        'basecontroller'],
	
function(template, BaseController){

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
	
	}

});



})
