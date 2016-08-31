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
$("#ntg-div-workshop-slot-monday-edit-1").removeClass("ntg-debug-padding-top-px-17");
$("#ntg-div-workshop-slot-monday-register-1").removeClass("ntg-debug-padding-top-px-17");





//These codes below are for adding and removing workshop time slot.
var Number_SlotFridayEdit           = 1;
var Number_SlotFridayRegister       = 1;
var Number_SlotMondayEdit           = 1;
var Number_SlotMondayRegister       = 1;
var Number_SlotSaturdayEdit         = 1;
var Number_SlotSaturdayRegister     = 1;
var Number_SlotSundayEdit           = 1;
var Number_SlotSundayRegister       = 1;
var Number_SlotThursdayEdit         = 1;
var Number_SlotThursdayRegister     = 1;
var Number_SlotTuesdayEdit          = 1;
var Number_SlotTuesdayRegister      = 1;
var Number_SlotWednesdayEdit        = 1;
var Number_SlotWednesdayRegister    = 1;
function String_SlotMonday(_Number_Index){
    console.log(_Number_Index);
    var String_IndexButtonAdd           = "ntg-div-workshop-slot-monday-edit-button-add-" + _Number_Index;
    var String_IndexButtonDelete        = "ntg-div-workshop-slot-monday-edit-button-delete-" + _Number_Index;
    var String_IndexInputSlotAmount     = "ntg-div-workshop-slot-monday-edit-input-slot-amount-" + _Number_Index;
    var String_IndexInputTimeEnd        = "ntg-div-workshop-slot-monday-edit-input-time-end-" + _Number_Index;
    var String_IndexInputTimeStart      = "ntg-div-workshop-slot-monday-edit-input-time-start-" + _Number_Index;
    var String_IndexMain                = "ntg-div-workshop-slot-monday-edit-" + _Number_Index;
    return "<div class=' ntg-debug-padding-top-px-17 row ' id=" + String_IndexMain + " > <div class=' col-xs-6 ' > <div class=' input-group ' > <span class=' input-group-addon ntg-debug-dimension-width-px-150 ' > Monday. </span> <input type='number' class=' form-control ntg-debug-dimension-height-px-45 ' id=" + String_IndexInputTimeStart + " placeholder='HHMM' > <span class=' input-group-addon ' > - </span> <input type='number' class=' form-control ntg-debug-dimension-height-px-45 ' id=" + String_IndexInputTimeEnd + " placeholder='HHMM' > </div> </div> <div class=' col-xs-2 ntg-debug-padding-left-px-0 ' > <input type='number' class=' form-control ntg-debug-dimension-height-px-45 ' id=" + String_IndexInputSlotAmount + " placeholder='Slot Amount.' > </div> <div class=' col-xs-2 ntg-debug-padding-left-px-0 ' > <button class=' btn btn-default btn-success form-control ntg-debug-dimension-height-px-45 ' id=" + String_IndexButtonAdd + " type='button' > Add. </button> </div> <div class=' col-xs-2 ntg-debug-padding-left-px-0 ' > <button class=' btn btn-danger btn-default form-control ntg-debug-dimension-height-px-45 ' id=" + String_IndexButtonDelete + " type='button' > Delete. </button> </div> </div>";
};
//To get and set these variable please use this setter function.
function Number_Get_Number_SlotFridayEdit           (){ return Number_SlotFridayEdit;           }
function Number_Get_Number_SlotFridayRegister       (){ return Number_SlotFridayRegister;       }
function Number_Get_Number_SlotMondayEdit           (){ return Number_SlotMondayEdit;           }
function Number_Get_Number_SlotMondayRegister       (){ return Number_SlotMondayRegister;       }
function Number_Get_Number_SlotSaturdayEdit         (){ return Number_SlotSaturdayEdit;         }
function Number_Get_Number_SlotSaturdayRegister     (){ return Number_SlotSaturdayRegister;     }
function Number_Get_Number_SlotSundayEdit           (){ return Number_SlotSundayEdit;           }
function Number_Get_Number_SlotSundayRegister       (){ return Number_SlotSundayRegister;       }
function Number_Get_Number_SlotThursdayEdit         (){ return Number_SlotThursdayEdit;         }
function Number_Get_Number_SlotThursdayRegister     (){ return Number_SlotThursdayRegister;     }
function Number_Get_Number_SlotTuesdayEdit          (){ return Number_SlotTuesdayEdit;          }
function Number_Get_Number_SlotTuesdayRegister      (){ return Number_SlotTuesdayRegister;      }
function Number_Get_Number_SlotWednesdayEdit        (){ return Number_SlotWednesdayEdit;        }
function Number_Get_Number_SlotWednesdayRegister    (){ return Number_SlotWednesdayRegister;    }
function Void_Set_Number_SlotFridayEdit             (_Number_){ Number_SlotFridayEdit           = _Number_; if(Number_SlotFridayEdit        < 1){ Number_SlotFridayEdit         = 1; } }
function Void_Set_Number_SlotFridayRegister         (_Number_){ Number_SlotFridayRegister       = _Number_; if(Number_SlotFridayRegister    < 1){ Number_SlotFridayRegister     = 1; } }
function Void_Set_Number_SlotMondayEdit             (_Number_){ Number_SlotMondayEdit           = _Number_; if(Number_SlotMondayEdit        < 1){ Number_SlotMondayEdit         = 1; } }
function Void_Set_Number_SlotMondayRegister         (_Number_){ Number_SlotMondayRegister       = _Number_; if(Number_SlotMondayRegister    < 1){ Number_SlotMondayRegister     = 1; } }
function Void_Set_Number_SlotSaturdayEdit           (_Number_){ Number_SlotSaturdayEdit         = _Number_; if(Number_SlotSaturdayEdit      < 1){ Number_SlotSaturdayEdit       = 1; } }
function Void_Set_Number_SlotSaturdayRegister       (_Number_){ Number_SlotSaturdayRegister     = _Number_; if(Number_SlotSaturdayRegister  < 1){ Number_SlotSaturdayRegister   = 1; } }
function Void_Set_Number_SlotSundayEdit             (_Number_){ Number_SlotSundayEdit           = _Number_; if(Number_SlotSundayEdit        < 1){ Number_SlotSundayEdit         = 1; } }
function Void_Set_Number_SlotSundayRegister         (_Number_){ Number_SlotSundayRegister       = _Number_; if(Number_SlotSundayRegister    < 1){ Number_SlotSundayRegister     = 1; } }
function Void_Set_Number_SlotThursdayEdit           (_Number_){ Number_SlotThursdayEdit         = _Number_; if(Number_SlotThursdayEdit      < 1){ Number_SlotThursdayEdit       = 1; } }
function Void_Set_Number_SlotThursdayRegister       (_Number_){ Number_SlotThursdayRegister     = _Number_; if(Number_SlotThursdayRegister  < 1){ Number_SlotThursdayRegister   = 1; } }
function Void_Set_Number_SlotTuesdayEdit            (_Number_){ Number_SlotTuesdayEdit          = _Number_; if(Number_SlotTuesdayEdit       < 1){ Number_SlotTuesdayEdit        = 1; } }
function Void_Set_Number_SlotTuesdayRegister        (_Number_){ Number_SlotTuesdayRegister      = _Number_; if(Number_SlotTuesdayRegister   < 1){ Number_SlotTuesdayRegister    = 1; } }
function Void_Set_Number_SlotWednesdayEdit          (_Number_){ Number_SlotWednesdayEdit        = _Number_; if(Number_SlotWednesdayEdit     < 1){ Number_SlotWednesdayEdit      = 1; } }
function Void_Set_Number_SlotWednesdayRegister      (_Number_){ Number_SlotWednesdayRegister    = _Number_; if(Number_SlotWednesdayRegister < 1){ Number_SlotWednesdayRegister  = 1; } }


function Void_ControlMondaySlotRegister(){
    //I need to iterate all button based on the count.
    for(var Number_I = 0; Number_I < Number_Get_Number_SlotMondayRegister(); Number_I ++){





        //Add button controller on latest added HTML components
        if(Number_I == (Number_Get_Number_SlotMondayRegister() - 1)){





            var Number_IndexComponent = Number_I + 1;

            //Controller for add button.
            $("#ntg-div-workshop-slot-monday-edit-button-add-" + Number_IndexComponent).click(function(){

                //Set the value to be increased by 1.
                Void_Set_Number_SlotMondayRegister(Number_Get_Number_SlotMondayRegister() + 1);
                $("#ntg-div-workshop-slot-monday-edit").append(String_SlotMonday(
                    Number_Get_Number_SlotMondayRegister()
                ));
                //Run this function again to set the button click controller on newly added
                //    HTML component.
                Void_ControlMondaySlotRegister();

            });
            //Controller for delete button.
            //Make sure when the Number_IndexComponent is 1 delete button is to reset the form.
            if(Number_IndexComponent == 1){
                $("#ntg-div-workshop-slot-monday-edit-button-delete-" + Number_IndexComponent).click(function(){
                    var Input_SlotAmount1   = $($($($($(this).parent()).parent()).children()[1]).children()[0])
                    var Input_TimeEnd1      = $($($($($($(this).parent()).parent()).children()[0]).children()[0]).children()[1])
                    var Input_TimeStart1    = $($($($($($(this).parent()).parent()).children()[0]).children()[0]).children()[3])
                    Input_SlotAmount1.val("");
                    Input_TimeEnd1.val("");
                    Input_TimeStart1.val("");
                });
            }
            else if(Number_IndexComponent != 1){
                $("#ntg-div-workshop-slot-monday-edit-button-delete-" + Number_IndexComponent).click(function(){





                    //Set the value to be decreased by 1.
                    Void_Set_Number_SlotMondayRegister(Number_Get_Number_SlotMondayRegister() - 1);
                    //Remove slot form block visually.
                    $($($(this).parent()).parent()).remove();





                    //Now the messy part!
                    //I need to iterate through all remainding HTML component at set the ID back
                    //    accordingly.
                    //Create the loop first!
                    var Array_Object_Child = $("#ntg-div-workshop-slot-monday-edit").children();
                    var Number_AmountChild = Array_Object_Child.length;
                    for(var Number_J = 0; Number_J < Number_AmountChild; Number_J ++){





                        var Number_IndexComponentButton = Number_J + 1;
                        




                        var Button_Add1Non          = $($($(Array_Object_Child[Number_J]).children()[2]).children()[0]);
                        var Button_Remove1Non       = $($($(Array_Object_Child[Number_J]).children()[3]).children()[0]);
                        var Div_Main1Non            = $(Array_Object_Child[Number_J]);
                        var Input_SlotAmount1Non    = $($($(Array_Object_Child[Number_J]).children()[1]).children()[0]);
                        var Input_TimeEnd1Non       = $($($($(Array_Object_Child[Number_J]).children()[0]).children()[0]).children()[3]);
                        var Input_TimeStart1Non     = $($($($(Array_Object_Child[Number_J]).children()[0]).children()[0]).children()[1]);
                        Button_Add1Non.attr         ("id", "ntg-div-workshop-slot-monday-edit-button-add-"          + Number_IndexComponentButton);
                        Button_Remove1Non.attr      ("id", "ntg-div-workshop-slot-monday-edit-button-delete-"       + Number_IndexComponentButton);
                        Div_Main1Non.attr           ("id", "ntg-div-workshop-slot-monday-edit-"                     + Number_IndexComponentButton);
                        Input_SlotAmount1Non.attr   ("id", "ntg-div-workshop-slot-monday-edit-input-slot-amount-"   + Number_IndexComponentButton);
                        Input_TimeEnd1Non.attr      ("id", "ntg-div-workshop-slot-monday-edit-input-time-end-"      + Number_IndexComponentButton);
                        Input_TimeStart1Non.attr    ("id", "ntg-div-workshop-slot-monday-edit-input-time-start-"    + Number_IndexComponentButton);
                    




                    }





                });
            }





        }





    }
}



Void_ControlMondaySlotRegister();