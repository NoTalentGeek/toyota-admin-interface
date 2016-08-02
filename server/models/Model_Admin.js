var Object_BCrypt               = require("bcrypt-nodejs");
var Object_Mongoose             = require("mongoose");
var Object_Schema               = Object_Mongoose.Schema;
var Object_Schema_Admin         = new Object_Schema({
    Admin_Bool_Available        : {type: Boolean, default: false },
    Admin_String_Email          : {type: String, default: "" },
    Admin_String_Location       : {type: String, default: "" },
    Admin_String_Name           : {type: String, default: "" },
    Admin_String_Password       : {type: String, default: "" }
});
//Generate a hash.
Object_Schema_Admin.methods.generateHash = function(_String_Password){
    console.log("Test.");
    return Object_BCrypt.hashSync(
        _String_Password,
        Object_BCrypt.genSaltSync(8),
        null
    );
};
//Check if password is valid.
Object_Schema_Admin.methods.validPassword = function(_String_Password){
    return Object_BCrypt.compareSync(_String_Password, this.Admin_String_Password);
};
//Create the model and then expose it to our application.
module.exports = Object_Mongoose.model("Admin", Object_Schema_Admin);