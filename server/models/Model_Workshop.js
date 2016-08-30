var Object_Mongoose = require("mongoose");
var Object_Schema = Object_Mongoose.Schema;
var Object_Schema_Workshop = new Object_Schema({
    Workshop_Number_Latitude: {type: Number, default: 0.0 },
    Workshop_Number_Longitude: {type: Number, default: 0.0 },
    Workshop_String_Name: {type: String, default: "" }
});





//Create the model and then expose it to our application.
module.exports = Object_Mongoose.model("Workshop", Object_Schema_Workshop);