define(['can/util/fixture'],
function(){
	can.fixture.delay = 100;
	

	
	can.fixture({
		'GET /testmodel' : function(){
			return [{id : 1, name : 'Item 1'}, 
			        {id : 2, name : 'Item 2'}];
		}
	})
	
	
})