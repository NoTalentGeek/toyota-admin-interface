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





        //Take the value in the String.
        String_ValueFromSelect = $(_String_IDSelectObject).val();
        //Specifically for PUT method we need to know the ID to the thing that is selected.
        //So everytime the select HTML value is changed, then changed the action URL value.
        //    according to the selected thing id.
        //The result from String_ValueFromSelect is "String:id_here".
        //Hence we need to remove the "String:".
        $("#form_left").attr("action", _String_URLAPI + String_ValueFromSelect.split("String:").pop());





    });





    //This is for the PUT update method.
    //These codes can modify the content of dataabase.
    $(_String_IDButtonEdit).click(function(){





        $.ajax({

            //Just spam every possible value here.
            data: ({

                "car_string_name_edit": $("#car_string_name_edit").val(),
                "user_string_email_edit": $("#user_string_email_edit").val(),
                "user_string_name_edit": $("#user_string_name_edit").val(),
                "user_string_password_edit": $("#user_string_password_edit").val(),
                "workshop_number_latitude_edit": $("#workshop_number_latitude_edit").val(),
                "workshop_number_longitude_edit": $("#workshop_number_longitude_edit").val(),
                "workshop_string_name_edit": $("#workshop_string_name_edit").val()

            }),
            dataType: "JSON", //This line is important/
            success: function(_Object_Result){ }, //What happened when the update process success.
            type: "PUT",
            url: _String_URLAPI + String_ValueFromSelect.split("String:").pop()

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
            url: _String_URLAPI + String_ValueFromSelect.split("String:").pop()
        });



        window.location.replace(_String_URLRedirect);





    });





    $(_String_IDButtonReset).click(function(){





        $("#car_string_name_edit").prop("value", "");
        $("#ntg_select_car:nth_child(0)").prop("selected", true);
        $("#ntg_select_user:nth_child(0)").prop("selected", true);
        $("#ntg_select_workshop:nth_child(0)").prop("selected", true);
        $("#user_string_email_edit").prop("value", "");
        $("#user_string_name_edit").prop("value", "");
        $("#user_string_password_edit").prop("value", "");
        $("#user_string_password_confirm_edit").prop("value", "");
        $("#workshop_number_latitude_edit").prop("value", "");
        $("#workshop_number_longitude_edit").prop("value", "");
        $("#workshop_string_name_edit").prop("value", "");





    });





    $(_String_IDButtonResetRegister).click(function(){





        $("#car_string_name_register").prop("value", "");
        $("#user_string_email_register").prop("value", "");
        $("#user_string_name_register").prop("value", "");
        $("#user_string_password_register").prop("value", "");
        $("#workshop_number_latitude_register").prop("value", "");
        $("#workshop_number_longitude_register").prop("value", "");
        $("#workshop_string_name_register").prop("value", "");





    });





}





//Make the control for car, user, and workshop.
Void_Edit_And_Remove(
    "#ntg_button_edit_car",
    "#ntg_button_remove_car",
    "#ntg_button_reset_car",
    "#ntg_button_reset_car_register",
    "#ntg_select_car",
    "/api/cars/",
    "/page_edit_register_car"
);
Void_Edit_And_Remove(
    "#ntg_button_edit_user",
    "#ntg_button_remove_user",
    "#ntg_button_reset_user",
    "#ntg_button_reset_user_register",
    "#ntg_select_user",
    "/api/users/",
    "/page_edit_register_user"
);
Void_Edit_And_Remove(
    "#ntg_button_edit_workshop",
    "#ntg_button_remove_workshop",
    "#ntg_button_reset_workshop",
    "#ntg_button_reset_workshop_register",
    "#ntg_select_workshop",
    "/api/workshops/",
    "/page_edit_register_workshop"
);