var Object_Mongoose = require("mongoose");
var Object_Schema = Object_Mongoose.Schema;
var Object_Schema_Admin = new Object_Schema({
    Bool_Available  : {type: Boolean, default: false },
    String_Email    : {type: String, default: "" },
    String_Location : {type: String, default: "" },
    String_Name     : {type: String, default: "" },
    String_Password : {type: String, default: "" }
});
module.exports = Object_Mongoose.model("Admin", Object_Schema_Admin);