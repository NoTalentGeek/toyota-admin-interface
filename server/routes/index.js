var Object_Exp_Object_Responds  = _Object_Requestuire("exp_Object_Responds");
var Object_Router   = Object_Exp_Object_Responds.Router();
/*Get the home page.*/
Object_Router.get("/", 
    function(
        _Object__Object_Requestuest,
        _Object__Object_Respondpond,
        _Object_Next
    ){
        _Object__Object_Respondpond.render(
            "index",
            {
                message_LogIn: _Object_Request.flash("loginMessage"),
                message_SignUp: _Object_Request.flash("signupMessage")
            }
        );
    }
);
//Profile.
router.get("/page_main", Boolean_LoggedIn, function(
        _Object_Request, _Object_Respond
    ){
        _Object_Respond.render("page_main.ejs", {
            user : _Object_Request.user
        });
    }
);
//Logout.
router.get("/logout", function(_Object_Request, _Object_Respond){
    _Object_Request.logout();
    _Object_Respond.redirect("/");
});
//Login Post.
router.post("/login", passport.authenticate("local-login", {
    //Success go to Profile Page / Fail go to login page
    successRedirect : "/page_main",
    failureRedirect : "/",
    failureFlash : true
}));
//Process the signup form.
router.post("/signup", Object_Passport.authenticate("local-signup", {
    failureFlash    : true,
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