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





//Specific HTML component generator for string form.
function String_Slot(
    _Number_Index,
    _String_Day,
    _String_Edit_Or_Register
){
    var String_IndexButtonAdd           = "ntg-div-workshop-slot-" + _String_Day + "-" + _String_Edit_Or_Register + "-button-add-" + _Number_Index;
    var String_IndexButtonDelete        = "ntg-div-workshop-slot-" + _String_Day + "-" + _String_Edit_Or_Register + "-button-delete-" + _Number_Index;
    var String_IndexInputSlotAmount     = "ntg-div-workshop-slot-" + _String_Day + "-" + _String_Edit_Or_Register + "-input-slot-amount-" + _Number_Index;
    var String_IndexInputTimeEnd        = "ntg-div-workshop-slot-" + _String_Day + "-" + _String_Edit_Or_Register + "-input-time-end-" + _Number_Index;
    var String_IndexInputTimeStart      = "ntg-div-workshop-slot-" + _String_Day + "-" + _String_Edit_Or_Register + "-input-time-start-" + _Number_Index;
    var String_IndexMain                = "ntg-div-workshop-slot-" + _String_Day + "-" + _String_Edit_Or_Register + "-" + _Number_Index;
    




    //Change _String_Day to capital letter. I meant the first letter.
    var String_Day = _String_Day.charAt(0).toUpperCase() + _String_Day.slice(1);





    return "<div class=' ntg-debug-padding-top-px-17 row ' id=" + String_IndexMain + " > <div class=' col-xs-6 ' > <div class=' input-group ' > <span class=' input-group-addon ntg-debug-dimension-width-px-150 ' > " + String_Day + ". </span> <input type='number' class=' form-control ntg-debug-dimension-height-px-45 ' id=" + String_IndexInputTimeStart + " placeholder='HHMM' > <span class=' input-group-addon ' > - </span> <input type='number' class=' form-control ntg-debug-dimension-height-px-45 ' id=" + String_IndexInputTimeEnd + " placeholder='HHMM' > </div> </div> <div class=' col-xs-2 ntg-debug-padding-left-px-0 ' > <input type='number' class=' form-control ntg-debug-dimension-height-px-45 ' id=" + String_IndexInputSlotAmount + " placeholder='Slot Amount.' > </div> <div class=' col-xs-2 ntg-debug-padding-left-px-0 ' > <button class=' btn btn-default btn-success form-control ntg-debug-dimension-height-px-45 ' id=" + String_IndexButtonAdd + " type='button' > Add. </button> </div> <div class=' col-xs-2 ntg-debug-padding-left-px-0 ' > <button class=' btn btn-danger btn-default form-control ntg-debug-dimension-height-px-45 ' id=" + String_IndexButtonDelete + " type='button' > Delete. </button> </div> </div>";
};





function Void_ControlSlot(
    _Number_SlotVariable,
    _String_Day,
    _String_Edit_Or_Register
){
    //I need to iterate all button based on the count.
    for(var Number_I = 0; Number_I < _Number_SlotVariable; Number_I ++){





        //Add button controller on latest added HTML components
        if(Number_I == (_Number_SlotVariable - 1)){





            var Number_IndexComponent = Number_I + 1;
            //Controller for add button.
            $("#ntg-div-workshop-slot-" + _String_Day + "-"+ _String_Edit_Or_Register +"-button-add-" + Number_IndexComponent).click(function(){
                //Set the value to be increased by 1.
                _Number_SlotVariable ++;
                //Then append the element there.
                $("#ntg-div-workshop-slot-" + _String_Day + "-"+ _String_Edit_Or_Register).append(String_Slot(
                    _Number_SlotVariable,
                    _String_Day,
                    _String_Edit_Or_Register
                ));
                //Run this function again to set the button click controller on newly added
                //    HTML component.
                Void_ControlSlot(_Number_SlotVariable, _String_Day, _String_Edit_Or_Register);

            });
            //Controller for delete button.
            //Make sure when the Number_IndexComponent is 1 delete button is to reset the form.
            if(Number_IndexComponent == 1){
                $("#ntg-div-workshop-slot-" + _String_Day + "-"+ _String_Edit_Or_Register +"-button-delete-" + Number_IndexComponent).click(function(){
                    var Input_SlotAmount1   = $($($($($(this).parent()).parent()).children()[1]).children()[0])
                    var Input_TimeEnd1      = $($($($($($(this).parent()).parent()).children()[0]).children()[0]).children()[1])
                    var Input_TimeStart1    = $($($($($($(this).parent()).parent()).children()[0]).children()[0]).children()[3])
                    Input_SlotAmount1.val("");
                    Input_TimeEnd1.val("");
                    Input_TimeStart1.val("");
                });
            }
            else if(Number_IndexComponent != 1){
                //$("#ntg-div-workshop-slot-tuesday-edit-button-delete-" + Number_IndexComponent).click(function(){
                $("#ntg-div-workshop-slot-" + _String_Day + "-"+ _String_Edit_Or_Register +"-button-delete-" + Number_IndexComponent).click(function(){





                    //Set the value to be decreased by 1.
                    _Number_SlotVariable --;
                    if(_Number_SlotVariable < 1){
                        _Number_SlotVariable = 1;
                    }
                    //Remove slot form block visually.
                    $($($(this).parent()).parent()).remove();





                    //Now the messy part!
                    //I need to iterate through all remainding HTML component at set the ID back
                    //    accordingly.
                    //Create the loop first!
                    var Array_Object_Child = $("#ntg-div-workshop-slot-" + _String_Day + "-"+ _String_Edit_Or_Register).children();
                    var Number_AmountChild = Array_Object_Child.length;
                    for(var Number_J = 0; Number_J < Number_AmountChild; Number_J ++){





                        var Number_IndexComponentButton = Number_J + 1;
                        




                        var Button_Add1Non          = $($($(Array_Object_Child[Number_J]).children()[2]).children()[0]);
                        var Button_Remove1Non       = $($($(Array_Object_Child[Number_J]).children()[3]).children()[0]);
                        var Div_Main1Non            = $(Array_Object_Child[Number_J]);
                        var Input_SlotAmount1Non    = $($($(Array_Object_Child[Number_J]).children()[1]).children()[0]);
                        var Input_TimeEnd1Non       = $($($($(Array_Object_Child[Number_J]).children()[0]).children()[0]).children()[3]);
                        var Input_TimeStart1Non     = $($($($(Array_Object_Child[Number_J]).children()[0]).children()[0]).children()[1]);
                        Button_Add1Non.attr         ("id", "ntg-div-workshop-slot-" + _String_Day + "-"+ _String_Edit_Or_Register +"-button-add-"          + Number_IndexComponentButton);
                        Button_Remove1Non.attr      ("id", "ntg-div-workshop-slot-" + _String_Day + "-"+ _String_Edit_Or_Register +"-button-delete-"       + Number_IndexComponentButton);
                        Div_Main1Non.attr           ("id", "ntg-div-workshop-slot-" + _String_Day + "-"+ _String_Edit_Or_Register +"-"                     + Number_IndexComponentButton);
                        Input_SlotAmount1Non.attr   ("id", "ntg-div-workshop-slot-" + _String_Day + "-"+ _String_Edit_Or_Register +"-input-slot-amount-"   + Number_IndexComponentButton);
                        Input_TimeEnd1Non.attr      ("id", "ntg-div-workshop-slot-" + _String_Day + "-"+ _String_Edit_Or_Register +"-input-time-end-"      + Number_IndexComponentButton);
                        Input_TimeStart1Non.attr    ("id", "ntg-div-workshop-slot-" + _String_Day + "-"+ _String_Edit_Or_Register +"-input-time-start-"    + Number_IndexComponentButton);
                    




                    }





                });
            }





        }





    }
}





Void_ControlSlot(Number_SlotFridayEdit, "friday", "edit");
Void_ControlSlot(Number_SlotFridayRegister, "friday", "register");
Void_ControlSlot(Number_SlotMondayEdit, "monday", "edit");
Void_ControlSlot(Number_SlotMondayRegister, "monday", "register");
Void_ControlSlot(Number_SlotSaturdayEdit, "saturday", "edit");
Void_ControlSlot(Number_SlotSaturdayRegister, "saturday", "register");
Void_ControlSlot(Number_SlotSundayEdit, "sunday", "edit");
Void_ControlSlot(Number_SlotSundayRegister, "sunday", "register");
Void_ControlSlot(Number_SlotThursdayEdit, "thursday", "edit");
Void_ControlSlot(Number_SlotThursdayRegister, "thursday", "register");
Void_ControlSlot(Number_SlotTuesdayEdit, "tuesday", "edit");
Void_ControlSlot(Number_SlotTuesdayRegister, "tuesday", "register");
Void_ControlSlot(Number_SlotWednesdayEdit, "wednesday", "edit");
Void_ControlSlot(Number_SlotWednesdayRegister, "wednesday", "register");