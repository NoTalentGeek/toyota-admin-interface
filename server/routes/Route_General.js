//This index.js is mainly for routing all things in this web application.





//Variables.
//Models
var Model_Admin_ = require("../../server/models/Model_Admin");
var Object_Express = require("express");
//Use passport to handle client session.
var Object_Passport = require("passport");
//Router object for routing page request.
var Object_Router = Object_Express.Router();
//Route variables.
var String_EditCar = "/edit_car";
var String_EditUser = "/edit_user";
var String_EditWorkshop = "/edit_workshop";
var String_LoginAdmin = "/login_admin";
var String_LogoutAdmin = "/logout_admin";
var String_PageEditRegisterCar = "/page_edit_register_car";
var String_PageEditRegisterUser = "/page_edit_register_user";
var String_PageEditRegisterWorkshop = "/page_edit_register_workshop";
var String_PageHome = "/";
var String_PageMain = "/page_main";
var String_RegisterAdmin = "/register_admin";
var String_RegisterCar = "/register_car";
var String_RegisterUser = "/register_user";
var String_RegisterWorkshop = "/register_workshop";





//Functions for console.log() convention.
function String_LogCheckEmailOrName(_String_NameModel){
    var String_ = "There is a/an " + _String_NameModel + " model with same email/name in the database. Consider to edit existing one.";
    console.log(String_);
    return String_;
};
function String_LogError1(_String_NameModel){
    var String_ = "Error happened when trying to add a/an" + _String_NameModel + " model.";
    console.log(String_);
    return String_;
};
function String_LogError2(_String_NameModel){
    var String_ = "Error happened when trying to add a/an" + _String_NameModel + " model. This error happened after validation.";
    console.log(String_);
    return String_;
};
function String_LogSuccess(_String_Entry, _String_NameModel){
    var String_ = "Successfully added " + _String_Entry + " as " + _String_NameModel + " model.";
    console.log(String_);
    return String_;
};
function String_LogValidityString(){
    var String_ = "The inputted String is not valid. It is either null, start with white spaces, or undefined.";
    console.log(String_);
    return String_;
};





/*Get the home page.
This is the home or index page. Whatever you would like to call it ;).
This page is for login and register for admin only.
These codes are for when the admin want to access the main index page.
There is middleman function Void_PreventRoutingIfAdminLoggedIn_Index()
    that prevents admin for getting into the homepage if he/she is
    logged in.
Admin needs to sign out first in order to access the home page again.*/
Object_Router.get(String_PageHome,
    Void_PreventRoutingIfAdminLoggedIn_Index, //This is the middleman function.
    function(
        _Object_Request,
        _Object_Respond,
        _Object_Next
    ){
        //These codes below are for rendering index.ejs in views folder.
        _Object_Respond.render("page_login_register_admin");
    }
);





/*This is the routing for the admin main control panel.
Main control panel is mainly to se what happened with all users online.*/
Object_Router.get(String_PageMain, Void_LoggedIn, function(
        _Object_Request, _Object_Respond
    ){
        //Search for this request logged in account and then logged it out.
        Model_Admin_.findOneAndUpdate({ _id: _Object_Request.session.passport.user }, { $set: { "Admin_Bool_Available": true } },
            function(_Object_Error, _Model_Admin_){
                if(_Object_Error){
                    throw(_Object_Error);
                }
                else{
                    Object_Router.Object_SocketIO_Server.emit("ntg_event_online_admin", _Model_Admin_._id);
                }
            }
        );

        /*Here we render the page_main.ejs with a String parameter
            to display which admin is logged into the main panel.
        These codes below is also works on identifying admin in the chat
            screen.*/
        _Object_Respond.render("page_main", {
            String_NameDisplay:
                _Object_Request.user.Admin_String_Name +
                " (" +
                _Object_Request.user.Admin_String_Email +
                ")",
            user: _Object_Request.user
        });
    }
);





/*Simple logout router.
If the logged in admin access this page he/she will redirected into the
    main page regardless whether the logout is succes or not.
If success his/her session ends.*/
Object_Router.get(String_LogoutAdmin, function(_Object_Request, _Object_Respond){
    //Search for this request logged in account and then logged it out.
    Model_Admin_.findOneAndUpdate({ _id: _Object_Request.session.passport.user }, { $set: { "Admin_Bool_Available": false } },
        function(_Object_Error, _Model_Admin_){
            if(_Object_Error){
                throw(_Object_Error);
            }
            else{
                Object_Router.Object_SocketIO_Server.emit("ntg_event_offline_admin", _Model_Admin_._id);
            }
        }
    );

    //I think the logout() function is from the PassportJS.
    _Object_Request.logout();
    _Object_Respond.redirect(String_PageHome);
});





/*Login post.
If there is an admin logged in, this will redirect to the /page_main.
This function is from the middleman function of
    Void_PreventRoutingIfAdminLoggedIn_Index().
Logged in admin should only access things those are inside /page_main.
If the admin failed to log in, for any reasons, he/she will be redirect into 
    he homepage.*/
Object_Router.post(
    String_LoginAdmin,
    Void_PreventRoutingIfAdminLoggedIn_Index, //This is the middleman function.
    Object_Passport.authenticate(
        "local-login",
        {
            failureRedirect: String_PageHome,
            successRedirect: String_PageMain
        }
    )
);





/*Process the signup form.
If an admin wants to process signup process.
If fail go back to the homepage.
If success go to main control page.*/
Object_Router.post(
    String_RegisterAdmin,
    Void_PreventRoutingIfAdminLoggedIn_Index, //This is the middleman function.
    Object_Passport.authenticate(
        "local-signup",
        {
            failureRedirect: String_PageHome,
            successRedirect: String_PageMain
        }
    )
);





//This is for the car form.
Object_Router.get(String_PageEditRegisterCar,
    function(
        _Object_Request,
        _Object_Respond,
        _Object_Next
    ){
        /*Make sure there is an admin logged in, otherwise direct him/her
            to homepage.*/
        if(_Object_Request.isAuthenticated() == true){
            _Object_Respond.render(
                "page_edit_register_car"
            );
        }
        else if(_Object_Request.isAuthenticated() == false){
            _Object_Respond.redirect("/");
        }
    }
);
//These codes below is for handling the register car model.
Object_Router.post(String_RegisterCar,
    function(
        _Object_Request,
        _Object_Respond,
        _Object_Next
    ){
        var Model_Car_ = require("../models/Model_Car");
        if (_Object_Request.isAuthenticated() == true){
            Model_Car_.findOne({"Car_String_Name": _Object_Request.param("Car_String_Name_Register") }, function(_Object_Error, _Model_Car){
                //If error.
                if(_Object_Error){
                    String_LogError1("car");
                    _Object_Respond.redirect(String_PageEditRegisterCar);
                }
                //Check name.
                if(_Model_Car){
                    String_LogCheckEmailOrName("car");
                    _Object_Respond.redirect(String_PageEditRegisterCar);
                }
                //Check String validity, whether the String starts with white spaces and is null or undefined.
                if(!_Object_Request.param("Car_String_Name_Register")){
                    String_LogValidityString();
                    _Object_Respond.redirect(String_PageEditRegisterCar);
                }
                else{





                    //Inputting the model.
                    var Model_Car_Temp = new Model_Car_();
                    Model_Car_Temp.Car_String_Name = _Object_Request.param("Car_String_Name_Register");





                    Model_Car_Temp.save(function(_Object_Error){
                        if(_Object_Error){
                            String_LogError2("car");
                            throw _Object_Error;
                        }
                        else{
                            String_LogSuccess(_Object_Request.param("Car_String_Name_Register"), "car");
                            _Object_Respond.redirect(String_PageEditRegisterCar);
                        }
                    });
                }
            });
        }
    }
);





//These routings are for user forms.
Object_Router.get(String_PageEditRegisterUser,
    function(
        _Object_Request,
        _Object_Respond,
        _Object_Next
    ){
        _Object_Respond.render(
            "page_edit_register_user"
        );
    }
);
Object_Router.post(String_RegisterUser,
    function(
        _Object_Request,
        _Object_Respond,
        _Object_Next
    ){
        var Model_User_ = require("../models/Model_User");
        if (_Object_Request.isAuthenticated() == true){
            Model_User_.findOne({"User_String_Email": _Object_Request.param("User_String_Email_Register") }, function(_Object_Error, _Model_User){
                //If error.
                if(_Object_Error){
                    String_LogError1("user");
                    _Object_Respond.redirect(String_PageEditRegisterUser);
                }
                //Check email.
                if(_Model_User){
                    String_LogCheckEmailOrName("user");
                    _Object_Respond.redirect(String_PageEditRegisterUser);
                }
                //PENDING: User validity here.
                else{





                    //Inputting the model.
                    var Model_User_Temp = new Model_User_();
                    Model_User_Temp.User_String_Email = _Object_Request.param("User_String_Email_Register");
                    Model_User_Temp.User_String_Name = _Object_Request.param("User_String_Name_Register");
                    Model_User_Temp.User_String_Password = Model_User_Temp.Void_GenerateHash(_Object_Request.param("User_String_Password_Register"));





                    Model_User_Temp.save(function(_Object_Error){
                        if(_Object_Error){
                            String_LogError2("user");
                            throw _Object_Error;
                        }
                        else{
                            String_LogSuccess(_Object_Request.param("User_String_Email_Register"), "user");
                            _Object_Respond.redirect(String_PageEditRegisterUser);
                        }
                    });
                }
            });
        }
    }
);





//These are routings for workshop forms.
Object_Router.get(String_PageEditRegisterWorkshop,
    function(
        _Object_Request,
        _Object_Respond,
        _Object_Next
    ){
        _Object_Respond.render(
            "page_edit_register_workshop"
        );
    }
);
Object_Router.post("/register_workshop",
    function(
        _Object_Request,
        _Object_Respond,
        _Object_Next
    ){
        var Model_Workshop_ = require("../models/Model_Workshop");
        if (_Object_Request.isAuthenticated() == true){
            Model_Workshop_.findOne({"Workshop_String_Name": _Object_Request.param("Workshop_String_Name_Register") }, function(_Object_Error, _Model_Workshop){
                //If error.
                if(_Object_Error){
                    String_LogError1("workshop");
                    _Object_Respond.redirect(String_PageEditRegisterWorkshop);
                }
                //Check name.
                if(_Model_Workshop){
                    String_LogCheckEmailOrName("workshop");
                    _Object_Respond.redirect(String_PageEditRegisterWorkshop);
                }
                else{






                    //Inputting the model.
                    var Model_Workshop_Temp = new Model_Workshop_();
                    Model_Workshop_Temp.Workshop_Number_Latitude = _Object_Request.param("Workshop_Number_Latitude_Register");
                    Model_Workshop_Temp.Workshop_Number_Longitude = _Object_Request.param("Workshop_Number_Longitude_Register");
                    Model_Workshop_Temp.Workshop_String_Name = _Object_Request.param("Workshop_String_Name_Register");





                    Model_Workshop_Temp.save(function(_Object_Error){
                        if(_Object_Error){
                            String_LogError2("workshop");
                            throw _Object_Error;
                        }
                        else{
                            String_LogSuccess(_Object_Request.param("Workshop_String_Name_Register"), "workshop");
                            _Object_Respond.redirect(String_PageEditRegisterWorkshop);
                        }
                    });
                }
            });
        }
    }
);





/*Check if an admin is logged in.
If there is no admin logged in then always redirect to the homepage.*/
function Void_LoggedIn(
    _Object_Request,
    _Object_Respond,
    _Object_Next
){
    //If the _Object_Request.isAuthenticated() returns true means that the user is logged in.
    if(_Object_Request.isAuthenticated() == true){
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

    //If no admin logged in in the client then redirect to the login page.
    _Object_Respond.redirect(String_PageHome);
}





/*If there is a user authenticated then prevent him/her to go back to the login/register page.
Unless he/she logged out.
Only use this middleman function in the main page.*/
function Void_PreventRoutingIfAdminLoggedIn_Index(
    _Object_Request,
    _Object_Respond,
    _Object_Next
){
    if(_Object_Request.isAuthenticated() == true){
        _Object_Respond.redirect(String_PageMain);
    }





    return _Object_Next();
}





//Export as module.
module.exports = Object_Router;