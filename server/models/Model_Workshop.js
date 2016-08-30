var Object_Mongoose = require("mongoose");
var Object_Schema = Object_Mongoose.Schema;
var Object_Schema_Workshop = new Object_Schema({




    //For the workshop slot it will be filled with a JavaScript "struct"
    //    the "struct" will be filled with Boolean_Occupied, String_TimeEnd, and
    //    String_TimeStart,
    Workshop_Array_Struct_SlotFriday: { default: [], type: Array },
    Workshop_Array_Struct_SlotMonday: { default: [], type: Array },
    Workshop_Array_Struct_SlotSaturday: { default: [], type: Array },
    Workshop_Array_Struct_SlotSunday: { default: [], type: Array },
    Workshop_Array_Struct_SlotThursday: { default: [], type: Array },
    Workshop_Array_Struct_SlotTuesday: { default: [], type: Array },
    Workshop_Array_Struct_SlotWednesday: { default: [], type: Array },





    Workshop_Number_Latitude: { default: 0.0, type: Number },
    Workshop_Number_Longitude: { default: 0.0, type: Number },
    Workshop_String_Name: { default: "", type: String }
});





//Create the model and then expose it to our application.
module.exports = Object_Mongoose.model("Workshop", Object_Schema_Workshop);