var Object_BCrypt = require("bcrypt-nodejs");
var Object_Mongoose = require("mongoose");
var Object_Schema = Object_Mongoose.Schema;
var Object_Schema_Admin = new Object_Schema({
    Admin_Bool_Available: {type: Boolean, default: false },
    Admin_String_Email: {type: String, default: "" },
    Admin_String_LocationWorkshop: {type: String, default: "" },
    Admin_String_Name: {type: String, default: "" },
    Admin_String_Password: {type: String, default: "" }
});





Object_Schema_Admin.methods.Get_String_CollectionName = function(){
    return String_CollectionName;
}





Object_Schema_Admin.methods.Void_GenerateHash = function(_String_Password){
    //Make sure the password is a valid String.
    if(_String_Password){
        return Object_BCrypt.hashSync(
            _String_Password,
            Object_BCrypt.genSaltSync(8),
            null
        );
    }
    return null;
};





Object_Schema_Admin.methods.Void_ReHashPassword = function(_String_Password){
    return Object_BCrypt.compareSync(_String_Password, this.Admin_String_Password);
};





//Create the model and then expose it to our application.
module.exports = Object_Mongoose.model("Admin", Object_Schema_Admin);