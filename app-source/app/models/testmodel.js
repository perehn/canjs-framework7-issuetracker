define(['can'],
function(can){


can.Model.extend('TestModel',
/* @Static */
{
	findAll : 'GET /testmodel',
	create  : 'POST /testmodel',
	update  : 'PUT /testmodel/{id}',
},
/* @Prototype */
{
	
});



})
