var Object_Express  = require("express");
var Object_Router   = Object_Express.Router();
var Object_Passport = require("passport");
/*Get the home page.*/
Object_Router.get("/", 
    function(
        _Object_Request,
        _Object_Respond,
        _Object_Next
    ){
        _Object_Respond.render(
            "index"
        );
    }
);
//Profile.
Object_Router.get("/page_main", Boolean_LoggedIn, function(
        _Object_Request, _Object_Respond
    ){
        _Object_Respond.render("page_main.ejs", {
            user : _Object_Request.user
        });
    }
);
//Logout.
Object_Router.get("/logout", function(_Object_Request, _Object_Respond){
    _Object_Request.logout();
    _Object_Respond.redirect("/");
});
//Login Post.
Object_Router.post("/login", Object_Passport.authenticate("local-login", {
    failureRedirect : "/",
    successRedirect : "/page_main"
}));
//Process the signup form.
Object_Router.post("/signup", Object_Passport.authenticate("local-signup", {
    failureRedirect : "/",
    successRedirect : "/page_main"
}));
//Check if an admin is logged in.
function Boolean_LoggedIn(
    _Object__Object_Requestuest,
    _Object__Object_Respondpond,
    _Object_Next
){
    if(_Object__Object_Requestuest.isAuthenticated()){
        return _Object_Next();
    }

    _Object__Object_Respondpond.redirect("/");
}
module.exports = Object_Router;