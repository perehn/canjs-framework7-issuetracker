
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
			
			loadPage : function(url, options){
				var config;
				
				if(typeof url !== 'string' && typeof controllerOptions === 'undefined'){
					config = url;
				}else{
					config = {url : url, options : options}
				}
				
				FM7App.loadPage(FM7App.mainView, config);
				
			}

	}
	
	can.Control.extend('AppControl',{
		
	},{
		init : function(){
			var self = this;

			
			this.element.find('body').append(template({}));
			
			FM7App = new Framework7({
				
				
				ajaxLinks : '.fm7link',
				swipeBackPage : true,
				debug : true,
				canjsPlugin : {}
				
				
			});
			
			FM7App.mainView = FM7App.addView('.view-main', {
				// Because we use fixed-through navbar we can enable dynamic navbar
				dynamicNavbar: true,
				domCache : true 
			});
			FM7App.popupView = FM7App.addView('.popup > .view', {
				dynamicNavbar: false,
				domCache : true 
			});
			FM7App.mainView.history = []; // Clear index page
			

			App.loadPage( {url : 'listpage', options : {}, animatePages : false, showBackLink : false});
			
		
		}
		
	});
	
	
	
	new AppControl(document, {});
	
	
	
});