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
	
	
	var testModelStore = initStore([
	               	          		    
	            	        		    {name : "Peter Tosh", company : 'The Chillaz'},
	            	        		    {name : "Romli Far", company : 'Mostiv'}
	            	        		  ]);
	
	can.fixture({
		'GET /testmodel' : testModelStore.findAll,
		'POST /testmodel' : testModelStore.create,
		'PUT /testmodel/{id}' : testModelStore.update
	})
	
	
})