define(['can/util/fixture'],
function(){
	can.fixture.delay = 0;
	
	var initStore = function(itemArray){
		var store = can.fixture.store(itemArray.length, function(i){
		    var item = itemArray[i];
		    if(item == null){
		    	return {};
		    }
		    if(item.id == null){
		    	item.id = i;
		    }
		    return item;
		
		})
		return store;
	}
	
	
	var issueStore = initStore([
	    {title : "Do refactoring", description : 'Need to refactor code base', status : "todo"},     	          		    
	    {title : "Look over test", description : 'Need to look over tests', status : "todo"},
	    {title : "Check header", description : 'The header needs to be checked up', status : "inprogress"}
	  ]);
	
	can.fixture({
		'GET /issue' : issueStore.findAll,
		'POST /issue' : issueStore.create,
		'PUT /issue/{id}' : issueStore.update
	})
	
	
})