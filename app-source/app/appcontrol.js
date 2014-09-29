
define([
         'mtemplate!app/sitecontainer.html',
    
         
         'jquery',
     	 'can/view/mustache', 
     	 'canjs-commons/extensions',
         'can/util/library', 
         'can/control/route', 
         'can/model',      
         'can/component',
         'can/control',
         'can/route',
         'can/map/delegate',
         'can/construct/super',
         'can/construct/proxy',
         'can/control/plugin',
         'can/list',
         'can/map/backup',
         'can/map/define',
         'can/map/validations',
         'canjs-commons/extensions',
         'app/pages',
         'app/models',
         'app/models/fixtures',
         
         'framework7',
         'canjs-commons/fm7-plugin/framework7-canjsplugin'
         ], function(template) {
	
	App = {
			
			openPage : function(pageController, options){
				var config;
				if(typeof pageController === 'object'){
					var config = pageController;
				}else{
					config = {
							pageController : pageController,
							options: options
						}
				}
				FM7App.openPage(App.mainView, config);
			},
			openPopup : function(pageController, options){
				var config;
				if(typeof pageController === 'object'){
					var config = pageController;
				}else{
					config = {
							pageController : pageController,
							options: options
						}
				}
				FM7App.openPopup(App.popupView, config);
			}

	}
	
	can.Control.extend('AppControl',{
		
	},{
		init : function(){
			var self = this;

			
			this.element.find('body').append(template({}));
		
			
			FM7App = new Framework7({
				
				
				ajaxLinks : '.link',
				swipeBackPage : true,
				debug : true,
				canjsPlugin : {
					
				}
				
				
			});
			
			App.mainView = FM7App.addView('.view-main', {
				
				dynamicNavbar: true,
				domCache : true
			});
			App.popupView = FM7App.addView('.popup > .view', {
				dynamicNavbar: true,
				domCache : true 
			});
			App.mainView.history = []; // Clear index page
			

			App.openPage( {pageController : Page.ListPage, options : {}, animatePages : false, showBackLink : false});
			
		
		},
		'.popup .controller close' : function(el,ev){
			
			FM7App.closeModal('.popup');
		},
		'.view-main .controller close' : function(el,ev){
			
			App.mainView.goBack();
		}
		
	});
	
	can.mustache.registerHelper('statusText',
		  function(_value){
			var value = can.isFunction(_value) ? _value() : _value;
		    switch(value){
		    case 'todo': return 'ToDo';
		    case 'inprogress': return 'In Progress';
		    case 'done': return 'Done';
		  }
	});
	
	new AppControl(document, {});
	
	
	
});