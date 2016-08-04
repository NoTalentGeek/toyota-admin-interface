var Object_Express  = require("express");
var Object_Router   = Object_Express.Router();
var Object_Passport = require("passport");
/*Get the home page.*/
Object_Router.get("/",
    Boolean_PreventRoutingIfAdminLoggedIn_Index,
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
            String_NameDisplay:
                _Object_Request.user.Admin_String_Name +
                " (" +
                _Object_Request.user.Admin_String_Email +
                ")",
            user: _Object_Request.user
        });
    }
);
//Logout.
Object_Router.get("/logout", function(_Object_Request, _Object_Respond){
    _Object_Request.logout();
    _Object_Respond.redirect("/");
});
//Login Post.
Object_Router.post("/login", Boolean_PreventRoutingIfAdminLoggedIn_OtherElse, Object_Passport.authenticate("local-login", {
    failureRedirect: "/",
    successRedirect: "/page_main"
}));
//Process the signup form.
Object_Router.post("/signup", Boolean_PreventRoutingIfAdminLoggedIn_OtherElse, Object_Passport.authenticate("local-signup", {
    failureRedirect: "/",
    successRedirect: "/page_main"
}));
//Check if an admin is logged in.
function Boolean_LoggedIn(
    _Object_Request,
    _Object_Respond,
    _Object_Next
){
    //If the _Object_Request.isAuthenticated() returns true means that the user is logged in.
    if(_Object_Request.isAuthenticated()){
        /*
        console.log("=====CHECK _Object_Request.user=====");
        console.log(_Object_Request.user);
        console.log(_Object_Request.user.Admin_String_Email);
        console.log(_Object_Request.user.Admin_String_Name);
        console.log("=====CHECK _Object_Request.user=====");
        */
        //Compose variable that will display in the chat or in the administration page.
        /*
        var String_NameDisplay =
            _Object_Request.user.Admin_String_Name +
            " (" +
            _Object_Request.user.Admin_String_Email +
            ")";
        console.log(String_NameDisplay);
        */
        return _Object_Next();
    }

    _Object_Respond.redirect("/");
}






function Boolean_PreventRoutingIfAdminLoggedIn_OtherElse(
    _Object_Request,
    _Object_Respond,
    _Object_Next
){
    if(_Object_Request.user){
        _Object_Respond.redirect("/page_main");
    }
    else{
        _Object_Next();
    }
}
function Boolean_PreventRoutingIfAdminLoggedIn_Index(
    _Object_Request,
    _Object_Respond,
    _Object_Next
){
    if(_Object_Request.user){
        _Object_Respond.redirect("/page_main");
    }
    else{
        _Object_Next();
    }
}





module.exports = Object_Router;