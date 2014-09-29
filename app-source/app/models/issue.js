define(['can'],
function(can){


can.Model.extend('Issue',
/* @Static */
{
	findAll : 'GET /issue',
	create  : 'POST /issue',
	update  : 'PUT /issue/{id}',
},
/* @Prototype */
{
	
});



})
