define(['mtemplate!app/pages/edititempage/edititempage.html', 
        'basecontroller'],
	
function(template, BaseController){

BaseController.extend('Page.Edititempage',
/* @Static */
{
	
},
/* @Prototype */
{
	template : template,
	
	preRender : function(options){
		if(!options.item){
			console.error('item is not defined');
		}	
	},

	
	'a#cancel click' : function(el,ev){
		ev.stop();
	
		this.element.trigger('close');
	},
	
	'a#save click' : function(el,ev){
		ev.stop();
		var self = this;
		this.options.item.backup();
		this.options.item.save().done(function(){
			self.element.trigger('close');
		});
	},

	
	preRender : function(options){
		this.options.item.backup();
	},
	destroy : function(){
		this.options.item.restore();
		this._super();
	}

});



})
