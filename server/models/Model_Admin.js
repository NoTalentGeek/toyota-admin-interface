var Object_Mongoose = require("mongoose");
var Object_Schema = Object_Mongoose.Schema;
var Object_Schema_Admin = new Object_Schema({
    Admin_Bool_Available  : {type: Boolean, default: false },
    Admin_String_Email    : {type: String, default: "" },
    Admin_String_Location : {type: String, default: "" },
    Admin_String_Name     : {type: String, default: "" },
    Admin_String_Password : {type: String, default: "" }
});
module.exports = Object_Mongoose.model("Admin", Object_Schema_Admin);