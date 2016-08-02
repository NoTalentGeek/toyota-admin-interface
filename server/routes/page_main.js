var Object_Express  = require("express");
var Object_Router   = Object_Express.Router();
Object_Router.get("/page_main",
    function(
        _Object_Request,
        _Object_Respond,
        _Object_Next
    ){
        _Object_Respond.render("page_main");
    }
);
module.exports = Object_Router;