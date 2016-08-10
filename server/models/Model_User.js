var Object_BCrypt               = require("bcrypt-nodejs");
var Object_Mongoose             = require("mongoose");
var Object_Schema               = Object_Mongoose.Schema;
//PENDING: How to put object in MongoDB database?
var Object_Schema_User         	= new Object_Schema({
    User_Model_Car_Has 			: {type: Model_Car, default: null },
    User_String_Email          	: {type: String, default: "" },
    User_String_Name           	: {type: String, default: "" },
    User_String_Password       	: {type: String, default: "" }
});
/*PENDING: Change the function name to Void_GenerateHash()
	and Void_ValidPassword().
Generate a hash.*/
Object_Schema_User.methods.generateHash = function(_String_Password){
    return Object_BCrypt.hashSync(
        _String_Password,
        Object_BCrypt.genSaltSync(8),
        null
    );
};
//Check if password is valid.
Object_Schema_User.methods.validPassword = function(_String_Password){
    return Object_BCrypt.compareSync(
    	_String_Password,
    	this.User_String_Password
    );
};
//Create the model and then expose it to our application.
module.exports = Object_Mongoose.model("User", Object_Schema_User);