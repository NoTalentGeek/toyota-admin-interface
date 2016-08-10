//Load Passport Local Strategy.
var Object_Passport_LocalStrategy = require("passport-local").Strategy;
//Load up the admin model.
var Model_Admin_ = require("../../server/models/Model_Admin");
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
            passReqToCallback   : true,
            passwordField       : "Admin_String_Password_LogIn",
            usernameField       : "Admin_String_Email_LogIn"
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
                            console.log("Error happened when logging in.");
                            return _Function_Done(_Object_Error);
                        }
                        //Check if _Model_Admin the client requested is exist.
                        if(!_Model_Admin){
                            console.log("The admin email requested is not found in the database.");
                            return _Function_Done(
                                null,
                                false
                            );
                        }
                        //If the admin is exist but the password is wrong.
                        if(!_Model_Admin.validPassword(_String_Password)){
                           console.log("Wrong password.");
                            return _Function_Done(
                                null,
                                false
                            );
                        }
                        else{
                            console.log("Successfully logging in.");
                            console.log("=====TESTING LOGGED ADMIN=====");
                            console.log(_Model_Admin); //_Model_Admin is apparently a table variable.
                            console.log(_Model_Admin.Admin_String_Email);
                            console.log("=====TESTING LOGGED ADMIN=====");
                            return _Function_Done(null, _Model_Admin);
                        }
                    }
                );
            });
        }
    ));
    //Local signup strategy.
    _Object_Passport.use("local-signup", new Object_Passport_LocalStrategy(
        {
            passReqToCallback   : true,
            passwordField       : "Admin_String_Password_SignUp",
            usernameField       : "Admin_String_Email_SignUp"
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
            process.nextTick(function() {
                //If there is no admin logged in.
                if (!_Object_Request.user) {
                    Model_Admin_.findOne({ "Admin_String_Email": _String_Email }, function(_Object_Error, _Model_Admin) {
                        //If error.
                        if(_Object_Error){
                            console.log("Error happened when signing up.");
                            return _Function_Done(_Object_Error);
                        }
                        //Check email.
                        if(_Model_Admin){
                            console.log("There is an admin with same email exist in the database. Pick different email.");
                            return _Function_Done(null, false);
                        }
                        else{
                            console.log("A new admin object is created.");
                            //Create a new admin.
                            var Model_Admin_Temporary = new Model_Admin_();
                            Model_Admin_Temporary.Admin_String_Email    = _String_Email;
                            Model_Admin_Temporary.Admin_String_Location = _Object_Request.param("Admin_String_Location_SignUp");
                            Model_Admin_Temporary.Admin_String_Name     = _Object_Request.param("Admin_String_Name_SignUp");
                            Model_Admin_Temporary.Admin_String_Password = Model_Admin_Temporary.generateHash(_String_Password);
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
                    //A new admin is successfully created.
                    console.log("There is an admin logged in.");
                    return _Function_Done(null, _Object_Request.user);
                }
            });
        }
    ));
};