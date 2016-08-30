//Create a basic function for Remove and update database.
function Void_Edit_And_Remove(
    _String_IDButtonEdit,
    _String_IDButtonRemove,
    _String_IDButtonReset,
    _String_IDButtonResetRegister,
    _String_IDSelectObject,
    _String_URLAPI,
    _String_URLRedirect
){





    //Take the value from the select HTML component.
    var String_ValueFromSelect = $(_String_IDSelectObject).val();





    //Capture what thing are seleted in the HTML select component.
    $(_String_IDSelectObject).change(function(){





        //Take the value in the string.
        String_ValueFromSelect = $(_String_IDSelectObject).val();
        //Specifically for PUT method we need to know the ID to the thing that is selected.
        //So everytime the select HTML value is changed, then changed the action URL value.
        //    according to the selected thing id.
        //The result from String_ValueFromSelect is "string:id_here".
        //Hence we need to remove the "string:".
        $("#form-left").attr("action", _String_URLAPI + String_ValueFromSelect.split("string:").pop());





    });





    //This is for the PUT update method.
    //These codes can modify the content of dataabase.
    $(_String_IDButtonEdit).click(function(){





        $.ajax({

            //Just spam every possible value here.
            data: ({

                "Car_String_Name_Edit": $("#Car_String_Name_Edit").val(),
                "User_String_Email_Edit": $("#User_String_Email_Edit").val(),
                "User_String_Name_Edit": $("#User_String_Name_Edit").val(),
                "User_String_Password_Edit": $("#User_String_Password_Edit").val(),
                "Workshop_Number_Latitude_Edit": $("#Workshop_Number_Latitude_Edit").val(),
                "Workshop_Number_Longitude_Edit": $("#Workshop_Number_Longitude_Edit").val(),
                "Workshop_String_Name_Edit": $("#Workshop_String_Name_Edit").val()

            }),
            dataType: "JSON", //This line is important/
            success: function(_Object_Result){ }, //What happened when the update process success.
            type: "PUT",
            url: _String_URLAPI + String_ValueFromSelect.split("string:").pop()

        });




        //Redirect when thing goes failure or success.
        window.location.replace(_String_URLRedirect);





    });





    //Delete button control.
    //These codes will delete thing that is selected in the HTML select box.
    $(_String_IDButtonRemove).click(function(){





        $.ajax({
            success: function(_Object_Result){ },
            type: "DELETE",
            url: _String_URLAPI + String_ValueFromSelect.split("string:").pop()
        });



        window.location.replace(_String_URLRedirect);





    });





    $(_String_IDButtonReset).click(function(){





        $("#Car_String_Name_Edit").prop("value", "");
        $("#ntg-select-car :nth-child(0)").prop("selected", true);
        $("#ntg-select-user :nth-child(0)").prop("selected", true);
        $("#ntg-select-workshop :nth-child(0)").prop("selected", true);
        $("#User_String_Email_Edit").prop("value", "");
        $("#User_String_Name_Edit").prop("value", "");
        $("#User_String_Password_Edit").prop("value", "");
        $("#User_String_Password_Confirm_Edit").prop("value", "");
        $("#Workshop_Number_Latitude_Edit").prop("value", "");
        $("#Workshop_Number_Longitude_Edit").prop("value", "");
        $("#Workshop_String_Name_Edit").prop("value", "");





    });





    $(_String_IDButtonResetRegister).click(function(){





        $("#Car_String_Name_Register").prop("value", "");
        $("#User_String_Email_Register").prop("value", "");
        $("#User_String_Name_Register").prop("value", "");
        $("#User_String_Password_Register").prop("value", "");
        $("#Workshop_Number_Latitude_Register").prop("value", "");
        $("#Workshop_Number_Longitude_Register").prop("value", "");
        $("#Workshop_String_Name_Register").prop("value", "");





    });





}





//Make the control for car, user, and workshop.
Void_Edit_And_Remove(
    "#ntg-button-edit-car",
    "#ntg-button-remove-car",
    "#ntg-button-reset-car",
    "#ntg-button-reset-car-register",
    "#ntg-select-car",
    "/api/cars/",
    "/page_edit_register_car"
);
Void_Edit_And_Remove(
    "#ntg-button-edit-user",
    "#ntg-button-remove-user",
    "#ntg-button-reset-user",
    "#ntg-button-reset-user-register",
    "#ntg-select-user",
    "/api/users/",
    "/page_edit_register_user"
);
Void_Edit_And_Remove(
    "#ntg-button-edit-workshop",
    "#ntg-button-remove-workshop",
    "#ntg-button-reset-workshop",
    "#ntg-button-reset-workshop-register",
    "#ntg-select-workshop",
    "/api/workshops/",
    "/page_edit_register_workshop"
);