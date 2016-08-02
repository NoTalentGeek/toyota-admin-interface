var Object_Express 	= require("express");
var Object_Router 	= Object_Express.Router();

/*Get the home page.*/
Object_Router.get("/", 
	function(
		_Object_Request,
		_Object_Respond,
		_Object_Next
	){
		_Object_Respond.render("index");
	}
);

module.exports = Object_Router;