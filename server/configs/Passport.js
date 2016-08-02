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
    console.log("1.");
    //Deserialize the admin for this session.
    _Object_Passport.deserializeUser(function(_Object_ID, _Function_Done){
        Model_Admin_.findById(_Object_ID, function(_Object_Error, _Model_Admin){
            _Function_Done(_Object_Error, _Model_Admin);
        });
    });
    console.log("2.");
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
            console.log("3.");
            if(_String_Email){
                _String_Email = _String_Email.toLowerCase();
            }
            console.log("4.");
            //Async.
            process.nextTick(function(){
                Model_Admin_.findOne({ "Admin_String_Email": _String_Email },
                    function(_Object_Error, _Model_Admin){
                        if(_Object_Error){
                            return _Function_Done(_Object_Error);
                        }
                        //Check if _Model_Admin the client requested is exist.
                        if(!_Model_Admin){
                            return _Function_Done(
                                null,
                                false,
                                _Object_Request.flash(
                                    "loginMessage",
                                    "No such admin found."
                                )
                            );
                        }
                        //If the admin is exist but the password is wrong.
                        if(!_Model_Admin.validPassword(_String_Password)){
                            return _Function_Done(
                                null,
                                false,
                                _Object_Request.flash(
                                    "loginMessage",
                                    "Wrong password"
                                )
                            );
                        }
                    }
                );
            });
        }
    ));
    console.log("5.");
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
            console.log("6.");
            if(_String_Email){
                _String_Email = _String_Email.toLowerCase();
            }
            console.log("7.");
            process.nextTick(function() {
                //If an admin already logged in into the system.
                if (!_Object_Request.user) {
                    Model_Admin_.findOne({ "Admin_String_Email": email }, function(_Object_Error, _Model_Admin) {
                        //If error.
                        if(_Object_Error)
                            return _Function_Done(_Object_Error);

                        //Check email.
                        if(_Model_Admin){
                            return _Function_Done(null, false, _Object_Request.flash('signupMessage', 'Wohh! the email is already taken.'));
                        }
                        else{
                            //Create a new admin.
                            var Model_Admin_Temporary = new Model_Admin_();

                            Model_Admin_Temporary.local.email = email;
                            Model_Admin_Temporary.local.password = Model_Admin_Temporary.generateHash(password);
                            Model_Admin_Temporary.save(function(_Object_Error){
                                if (_Object_Error)
                                    throw _Object_Error;

                                return _Function_Done(null, Model_Admin_Temporary);
                            });
                        }
                    });

                }
                else{
                    return _Function_Done(null, _Object_Request.user);
                }
            });
        }
    ));
    console.log("8.");
};