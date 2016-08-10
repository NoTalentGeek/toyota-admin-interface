/*PENDING: I am not sure if I need a crypt here.
var Object_BCrypt               = require("bcrypt-nodejs");*/
var Object_Mongoose             = require("mongoose");
var Object_Schema               = Object_Mongoose.Schema;
//PENDING: How to put object in MongoDB database?
var Object_Schema_Car           = new Object_Schema({
    Car_String_Name             : {type: String, default: "" },
});
/*PENDING: Change the function name to Void_GenerateHash()
	and Void_ValidPassword().
Generate a hash.*/
Object_Schema_Car.methods.generateHash = function(_String_Password){
    return Object_BCrypt.hashSync(
        _String_Password,
        Object_BCrypt.genSaltSync(8),
        null
    );
};
//Check if password is valid.
Object_Schema_Car.methods.validPassword = function(_String_Password){
    return Object_BCrypt.compareSync(
    	_String_Password,
    	this.Car_String_Password
    );
};
//Create the model and then expose it to our application.
module.exports = Object_Mongoose.model("Car", Object_Schema_Car);