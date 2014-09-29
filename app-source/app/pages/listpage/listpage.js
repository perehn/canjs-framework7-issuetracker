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
		
		options.statusMap = new can.Map({
			'todo' : {title : 'ToDo'},
			'inprogress' : {title : 'In Progress'},
			'done' : {title : 'Done'}
		})
	
		options.statusMap.each(function(status,key){
			var list = options.issues.withStatus(key);
			status.attr('issues', options.issues.withStatus(key));
		})
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
	
	
	'{Issue} statuschange' : function(Issue, ev, data){
	
		var statusMap = this.options.statusMap;
		if(data.from){
			var fromList = statusMap.attr(data.from).issues;
			fromList.remove(data.issue);
		}
		if(data.to){
			var toList = statusMap.attr(data.to).issues;
			toList.push(data.issue);
		}
		
		
	}

});




})
