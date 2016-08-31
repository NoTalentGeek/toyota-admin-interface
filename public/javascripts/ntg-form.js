//This JavaScript is specifically for cosmetic aspects of form
//    in this web application.
//For main form animation.
$(function(){





    $("#form-left-link").click(function(_Object_Event){
        $("#form-left").delay(100).fadeIn(100);
        $("#form-right").fadeOut(100);
        $("#form-right-link").removeClass("active");
        $(this).addClass("active");
        _Object_Event.preventDefault();
    });





    $("#form-right-link").click(function(_Object_Event){
        $("#form-right").delay(100).fadeIn(100);
        $("#form-left").fadeOut(100);
        $("#form-left-link").removeClass("active");
        $(this).addClass("active");
        _Object_Event.preventDefault();
    });





});




//These codes below are for preventing buttons to stay focussed after click.
$(".btn").mouseup(function(){
    $(this).blur();
});





//These codes below are for removing the class of ntg-debug-padding-top-px-17
//    for id of ntg-div-workshop-slot-monday-1 because there is additional
//    bottom padding from a component above ntg-div-workshop-slot-monday-1.
$("#ntg-div-workshop-slot-monday-1").removeClass("ntg-debug-padding-top-px-17");





//These codes below are for adding and removing workshop time slot.
var Number_SlotFriday       = 1;
var Number_SlotMonday       = 1;
var Number_SlotSaturday     = 1;
var Number_SlotSunday       = 1;
var Number_SlotThursday     = 1;
var Number_SlotTuesday      = 1;
var Number_SlotWednesday    = 1;
//To get and set these variable please use this setter function.
function Number_Get_Number_SlotFriday       (){ return Number_SlotFriday;       }
function Number_Get_Number_SlotMonday       (){ return Number_SlotMonday;       }
function Number_Get_Number_SlotSaturday     (){ return Number_SlotSaturday;     }
function Number_Get_Number_SlotSunday       (){ return Number_SlotSunday;       }
function Number_Get_Number_SlotThursday     (){ return Number_SlotThursday;     }
function Number_Get_Number_SlotTuesday      (){ return Number_SlotTuesday;      }
function Number_Get_Number_SlotWednesday    (){ return Number_SlotWednesday;    }
function Void_Set_Number_SlotFriday         (_Number_){ Number_SlotFriday       = _Number_; if(Number_SlotFriday    < 1){ Number_SlotFriday     = 1; } }
function Void_Set_Number_SlotMonday         (_Number_){ Number_SlotMonday       = _Number_; if(Number_SlotMonday    < 1){ Number_SlotMonday     = 1; } }
function Void_Set_Number_SlotSaturday       (_Number_){ Number_SlotSaturday     = _Number_; if(Number_SlotSaturday  < 1){ Number_SlotSaturday   = 1; } }
function Void_Set_Number_SlotSunday         (_Number_){ Number_SlotSunday       = _Number_; if(Number_SlotSunday    < 1){ Number_SlotSunday     = 1; } }
function Void_Set_Number_SlotThursday       (_Number_){ Number_SlotThursday     = _Number_; if(Number_SlotThursday  < 1){ Number_SlotThursday   = 1; } }
function Void_Set_Number_SlotTuesday        (_Number_){ Number_SlotTuesday      = _Number_; if(Number_SlotTuesday   < 1){ Number_SlotTuesday    = 1; } }
function Void_Set_Number_SlotWednesday      (_Number_){ Number_SlotWednesday    = _Number_; if(Number_SlotWednesday < 1){ Number_SlotWednesday  = 1; } }
//Example prototype of button control for Monday button.
$()