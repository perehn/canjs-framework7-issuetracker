define(['mtemplate!app/pages/itempage/itempage.html', 
        'basecontroller'],
	
function(template, BaseController){

BaseController.extend('Page.Itempage',
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
		var id = Number(options.subpage);
		options.item = options.items.findById(id);
	},
	postRender : function(options){
	
	}

});



})
