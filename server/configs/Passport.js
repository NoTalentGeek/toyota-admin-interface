//Load Passport Local Strategy.
var Object_Passport_LocalStrategy = require("passport-local").Strategy;
//Load up the admin model.
var Model_Admin_ = require("../../server/models/Model_Admin");


function String_LogError(_String_MethodPlusVerbIng){
    var String_ = "Error happened when " + _String_MethodPlusVerbIng + ".";
    console.log(String_);
    return String_;
}
function String_LogErrorAnAdminLoggedIn(){
    var String_ = "Another admin is logged in. Please sign out and try to register again."
    console.log(String_);
    return String_
}
function String_LogErrorCannotFound(){
    var String_ = "Cannot find admin with email specified.";
    console.log(String_);
    return String_;
}
function String_LogErrorEmailExist(){
    var String_ = "Email specified is already exist in database. Either choose to forgot password or pick different email.";
    console.log(String_);
    return String_;
}
function String_LogErrorWrongPassword(){
    var String_ = "Password and admin email do not match.";
    console.log(String_);
    return String_;
}
function String_LogSuccess(_String_Entry, _String_MethodPlusVerbTwo){
    var String_ = _String_Entry + " is successfully " + _String_MethodPlusVerbTwo + ".";
    console.log(String_);
    return String_;
}


//Export function.
module.exports = function(_Object_Passport){





    //Serialize admin for this session.
    _Object_Passport.serializeUser(function(_Model_Admin, _Function_Done){
        _Function_Done(null, _Model_Admin.id);
    });





    //Deserialize the admin for this session.
    _Object_Passport.deserializeUser(function(_Object_ID, _Function_Done){
        Model_Admin_.findById(_Object_ID, function(_Object_Error, _Model_Admin){
            _Function_Done(_Object_Error, _Model_Admin);
        });
    });





    //Local strategy.
    _Object_Passport.use("local-login", new Object_Passport_LocalStrategy(
        {
            passReqToCallback: true,
            passwordField: "Admin_String_Password_LogIn",
            usernameField: "Admin_String_Email_LogIn"
        },
        function(
            _Object_Request,
            _String_Email,
            _String_Password,
            _Function_Done
        ){
            if(_String_Email){
                _String_Email = _String_Email.toLowerCase();
            }
            //Async.
            process.nextTick(function(){





                Model_Admin_.findOne({ "Admin_String_Email": _String_Email },
                    function(_Object_Error, _Model_Admin){





                        if(_Object_Error){
                            String_LogError("logging in");
                            return _Function_Done(_Object_Error);
                        }





                        //Check if _Model_Admin the client requested is exist.
                        if(!_Model_Admin){
                            String_LogErrorCannotFound()
                            return _Function_Done(
                                null,
                                false
                            );
                        }





                        //If the admin is exist but the password is wrong.
                        if(!_Model_Admin.Void_ReHashPassword(_String_Password)){
                            String_LogErrorWrongPassword()
                            return _Function_Done(
                                null,
                                false
                            );
                        }
                        else{
                            /*
                            console.log("Successfully logging in.");
                            console.log("=====TESTING LOGGED ADMIN=====");
                            console.log(_Model_Admin); //_Model_Admin is apparently a table variable.
                            console.log(_Model_Admin.Admin_String_Email);
                            console.log("=====TESTING LOGGED ADMIN=====");*/




                            String_LogSuccess(_Model_Admin.Admin_String_Email, "logged in");
                            return _Function_Done(null, _Model_Admin);





                        }
                    }
                );





            });
        }
    ));





    //Local Register strategy.
    _Object_Passport.use("local-signup", new Object_Passport_LocalStrategy(
        {
            passReqToCallback: true,
            passwordField: "Admin_String_Password_Register",
            usernameField: "Admin_String_Email_Register"
        },
        function(
            _Object_Request,
            _String_Email,
            _String_Password,
            _Function_Done
        ){
            if(_String_Email){
                _String_Email = _String_Email.toLowerCase();
            }
            process.nextTick(function(){





                //If there is no admin logged in.
                if (!_Object_Request.user){
                    Model_Admin_.findOne({ "Admin_String_Email": _String_Email }, function(_Object_Error, _Model_Admin) {
                        //If error.
                        if(_Object_Error){
                            String_LogError("registering");
                            return _Function_Done(_Object_Error);
                        }
                        //Check email.
                        if(_Model_Admin){
                            String_LogErrorEmailExist()
                            return _Function_Done(null, false);
                        }
                        else{
                            //Create a new admin.
                            var Model_Admin_Temporary = new Model_Admin_();
                            console.log(_Object_Request.body);
                            Model_Admin_Temporary.Admin_String_Email = _String_Email;
                            Model_Admin_Temporary.Admin_String_IDWorkshop = _Object_Request.body.Admin_String_IDWorkshop_Register;
                            Model_Admin_Temporary.Admin_String_Name = _Object_Request.body.Admin_String_Name_Register;
                            Model_Admin_Temporary.Admin_String_Password = Model_Admin_Temporary.Void_GenerateHash(_String_Password);



                            String_LogSuccess(_String_Email, "registered");



                            Model_Admin_Temporary.save(function(_Object_Error){
                                if(_Object_Error){
                                    throw _Object_Error;
                                }

                                return _Function_Done(null, Model_Admin_Temporary);
                            });





                        }
                    });

                }
                else{
                    //An admin is still logged in.
                    String_LogErrorAnAdminLoggedIn()
                    return _Function_Done(null, _Object_Request.user);
                }





            });
        }
    ));





};