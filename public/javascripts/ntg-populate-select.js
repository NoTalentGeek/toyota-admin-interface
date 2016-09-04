//Workshop in admin registration form.
var Object_ResultWorkshopAdmin = undefined;
angular.module("ng_app_page_login_register_admin", [])
.controller(
    "ng_controller_page_login_register_admin",
    function($scope, $http){
        $scope.ng_model_select_workshop = null;
        $scope.ng_options_select_workshop = [];

        $http(
            {
                data: { applicationId: 3 },
                method: "GET",
                url: "/api/workshops"
            }
        )
        .success(
            function(_Object_Result){
                $scope.ng_options_select_workshop = _Object_Result;
                Object_ResultWorkshopAdmin = _Object_Result;
            }
        );
    }
);
$("#admin_string_workshopname_register").change(function(){
    var Number_Index = $("#admin_string_workshopname_register").prop("selectedIndex");
    $("#admin_string_workshopid_register").val(Object_ResultWorkshopAdmin[Number_Index - 1]._id);
});





//Car.
var Object_ResultCar = undefined;
angular.module("ng_app_page_edit_register_car", [])
.controller(
    "ng_controller_page_edit_register_car",
    function($scope, $http){
        $scope.ng_model_select_car = null;
        $scope.ng_options_select_car = [];

        $http(
            {
                data: { applicationId: 3 },
                method: "GET",
                url: "/api/cars"
            }
        )
        .success(
            function(_Object_Result){
                $scope.ng_options_select_car = _Object_Result;
                Object_ResultCar = _Object_Result;
            }
        );
    }
);
$("#ntg_select_car").change(function(){
    var Number_Index = $("#ntg_select_car").prop("selectedIndex");
    $("#car_string_name_edit").val(Object_ResultCar[Number_Index - 1].Car_String_Name);
});




//User.
var Object_ResultUser = undefined;
angular.module("ng_app_page_edit_register_user", [])
.controller(
    "ng_controller_page_edit_register_user",
    function($scope, $http){
        $scope.ng_model_select_user = null;
        $scope.ng_options_select_user = [];

        $http(
            {
                data: { applicationId: 3 },
                method: "GET",
                url: "/api/users"
            }
        )
        .success(
            function(_Object_Result){
                $scope.ng_options_select_user = _Object_Result;
                Object_ResultUser = _Object_Result;
            }
        );
    }
);
$("#ntg_select_user").change(function(){
    var Number_Index = $("#ntg_select_user").prop("selectedIndex");
    $("#user_string_email_edit").val(Object_ResultUser[Number_Index - 1].User_String_Email);
    $("#user_string_name_edit").val(Object_ResultUser[Number_Index - 1].User_String_Name);
});





//Workshop.
var Object_ResultWorkshop = undefined;
angular.module("ng_app_page_edit_register_workshop", [])
.controller(
    "ng_controller_page_edit_register_workshop",
    function($scope, $http){
        $scope.ng_model_select_workshop = null;
        $scope.ng_options_select_workshop = [];

        $http(
            {
                data: { applicationId: 3 },
                method: "GET",
                url: "/api/workshops"
            }
        )
        .success(
            function(_Object_Result){
                $scope.ng_options_select_workshop = _Object_Result;
                Object_ResultWorkshop = _Object_Result;
            }
        );
    }
);
//Specifically for workshop when there is change in the selector box
//    also move the marker into the currently seelcted workshop.
$("#ntg_select_workshop").change(function(){
    var Number_Index = $("#ntg_select_workshop").prop("selectedIndex");

//Array of days sort in alphabetically.
var Array_String_Day = ["friday", "monday", "saturday", "sunday", "thursday", "tuesday", "wednesday"];
//Current elements before new value are chosen.
//Loop until the children length is only 1.
//Clear and delete everything.
for(var Number_I = 0; Number_I < Array_String_Day.length; Number_I ++){
    while($("#ntg_div_workshop_slot_" + Array_String_Day[Number_I] + "_edit").children().length > 1){
        $($("#ntg_div_workshop_slot_" + Array_String_Day[Number_I] + "_edit").children()[$("#ntg_div_workshop_slot_" + Array_String_Day[Number_I] + "_edit").children().length - 1]).remove();
    }
}
//Here I want to populate how many select out there.
//First I need to know how many data entry are there per workshop PER DAY.
//I will use this number to iterate the amount of necessary slot form.
var Array_Object_SlotFridayEdit = Object_ResultWorkshop[Number_Index - 1].Workshop_Array_String_SlotFriday;
var Array_Object_SlotMondayEdit = Object_ResultWorkshop[Number_Index - 1].Workshop_Array_String_SlotMonday;
var Array_Object_SlotSaturdayEdit = Object_ResultWorkshop[Number_Index - 1].Workshop_Array_String_SlotSaturday;
var Array_Object_SlotSundayEdit = Object_ResultWorkshop[Number_Index - 1].Workshop_Array_String_SlotSunday;
var Array_Object_SlotThursdayEdit = Object_ResultWorkshop[Number_Index - 1].Workshop_Array_String_SlotThursday;
var Array_Object_SlotTuesdayEdit = Object_ResultWorkshop[Number_Index - 1].Workshop_Array_String_SlotTuesday;
var Array_Object_SlotWednesdayEdit = Object_ResultWorkshop[Number_Index - 1].Workshop_Array_String_SlotWednesday;
//Create array so that it is easy to manage codes.
//Note that the index must be according to each array.
//For example "friday" in Array_String_Day is at index 0, hence Number_SlotFridayEditLength
//    should also at index 0.
//For practical purpose just sort the day alphabetically.
var Array_Number_SlotEdit = [
    Array_Object_SlotFridayEdit,
    Array_Object_SlotMondayEdit,
    Array_Object_SlotSaturdayEdit,
    Array_Object_SlotSundayEdit,
    Array_Object_SlotThursdayEdit,
    Array_Object_SlotTuesdayEdit,
    Array_Object_SlotWednesdayEdit
];
var Array_Number_SlotEditLenght = [
    Array_Object_SlotFridayEdit.length,
    Array_Object_SlotMondayEdit.length,
    Array_Object_SlotSaturdayEdit.length,
    Array_Object_SlotSundayEdit.length,
    Array_Object_SlotThursdayEdit.length,
    Array_Object_SlotTuesdayEdit.length,
    Array_Object_SlotWednesdayEdit.length
];
var Array_String_DivSlot = [
    "#ntg_div_workshop_slot_" + Array_String_Day[0] + "_edit",
    "#ntg_div_workshop_slot_" + Array_String_Day[1] + "_edit",
    "#ntg_div_workshop_slot_" + Array_String_Day[2] + "_edit",
    "#ntg_div_workshop_slot_" + Array_String_Day[3] + "_edit",
    "#ntg_div_workshop_slot_" + Array_String_Day[4] + "_edit",
    "#ntg_div_workshop_slot_" + Array_String_Day[5] + "_edit",
    "#ntg_div_workshop_slot_" + Array_String_Day[6] + "_edit"
];
var Array_String_DivSlotButtonAdd = [
    "#ntg_div_workshop_slot_" + Array_String_Day[0] + "_edit_button_add_",
    "#ntg_div_workshop_slot_" + Array_String_Day[1] + "_edit_button_add_",
    "#ntg_div_workshop_slot_" + Array_String_Day[2] + "_edit_button_add_",
    "#ntg_div_workshop_slot_" + Array_String_Day[3] + "_edit_button_add_",
    "#ntg_div_workshop_slot_" + Array_String_Day[4] + "_edit_button_add_",
    "#ntg_div_workshop_slot_" + Array_String_Day[5] + "_edit_button_add_",
    "#ntg_div_workshop_slot_" + Array_String_Day[6] + "_edit_button_add_"
];
var Array_String_DivSlotButtonDelete = [
    "#ntg_div_workshop_slot_" + Array_String_Day[0] + "_edit_button_delete_",
    "#ntg_div_workshop_slot_" + Array_String_Day[1] + "_edit_button_delete_",
    "#ntg_div_workshop_slot_" + Array_String_Day[2] + "_edit_button_delete_",
    "#ntg_div_workshop_slot_" + Array_String_Day[3] + "_edit_button_delete_",
    "#ntg_div_workshop_slot_" + Array_String_Day[4] + "_edit_button_delete_",
    "#ntg_div_workshop_slot_" + Array_String_Day[5] + "_edit_button_delete_",
    "#ntg_div_workshop_slot_" + Array_String_Day[6] + "_edit_button_delete_"
];
var Array_String_DivSlotInputSlot = [
    "#ntg_div_workshop_slot_" + Array_String_Day[0] + "_edit_input_slot_amount_",
    "#ntg_div_workshop_slot_" + Array_String_Day[1] + "_edit_input_slot_amount_",
    "#ntg_div_workshop_slot_" + Array_String_Day[2] + "_edit_input_slot_amount_",
    "#ntg_div_workshop_slot_" + Array_String_Day[3] + "_edit_input_slot_amount_",
    "#ntg_div_workshop_slot_" + Array_String_Day[4] + "_edit_input_slot_amount_",
    "#ntg_div_workshop_slot_" + Array_String_Day[5] + "_edit_input_slot_amount_",
    "#ntg_div_workshop_slot_" + Array_String_Day[6] + "_edit_input_slot_amount_"
];
var Array_String_DivSlotInputTimeEnd = [
    "#ntg_div_workshop_slot_" + Array_String_Day[0] + "_edit_input_time_end_",
    "#ntg_div_workshop_slot_" + Array_String_Day[1] + "_edit_input_time_end_",
    "#ntg_div_workshop_slot_" + Array_String_Day[2] + "_edit_input_time_end_",
    "#ntg_div_workshop_slot_" + Array_String_Day[3] + "_edit_input_time_end_",
    "#ntg_div_workshop_slot_" + Array_String_Day[4] + "_edit_input_time_end_",
    "#ntg_div_workshop_slot_" + Array_String_Day[5] + "_edit_input_time_end_",
    "#ntg_div_workshop_slot_" + Array_String_Day[6] + "_edit_input_time_end_"
];
var Array_String_DivSlotInputTimeStart = [
    "#ntg_div_workshop_slot_" + Array_String_Day[0] + "_edit_input_time_start_",
    "#ntg_div_workshop_slot_" + Array_String_Day[1] + "_edit_input_time_start_",
    "#ntg_div_workshop_slot_" + Array_String_Day[2] + "_edit_input_time_start_",
    "#ntg_div_workshop_slot_" + Array_String_Day[3] + "_edit_input_time_start_",
    "#ntg_div_workshop_slot_" + Array_String_Day[4] + "_edit_input_time_start_",
    "#ntg_div_workshop_slot_" + Array_String_Day[5] + "_edit_input_time_start_",
    "#ntg_div_workshop_slot_" + Array_String_Day[6] + "_edit_input_time_start_"
];
//Loop to create slot HTML component.
for(var Number_I = 0; Number_I < Array_String_Day.length; Number_I ++){
    for(var Number_J = 0; Number_J < Array_Number_SlotEditLenght[Number_I]; Number_J ++){
        var Number_IDTemporary = Number_J + 1;
        if(Number_IDTemporary > 1){
            $(Array_String_DivSlot[Number_I]).append(String_Slot(
                Number_IDTemporary,
                Array_String_Day[Number_I],
                "edit"
            ));
        }

        console.log(Number_I);

        //We need to loop again 

        $(Array_String_DivSlotButtonAdd[Number_I] + Number_IDTemporary).click(function(){
            //Testing variable.
            console.log(Number_I);
            console.log($(this).attr("id"));
            console.log($($(this).parent()).attr("id"));
            console.log($($($(this).parent()).parent()).attr("id"));
            console.log($($($($(this).parent()).parent()).parent()).attr("id"));
            console.log($($($($(this).parent()).parent()).parent()).children().length);

            $($($($(this).parent()).parent()).parent()).append(String_Slot( 
                $(this).children().length,
                "test-1",
                "edit"
            ));
        });
        //$(Array_String_DivSlotButtonDelete[Number_I] + Number_IDTemporary).click();



        $(Array_String_DivSlotInputSlot[Number_I] + Number_IDTemporary).val(Array_Number_SlotEdit[Number_I][Number_J][2]);
        $(Array_String_DivSlotInputTimeEnd[Number_I] + Number_IDTemporary).val(Array_Number_SlotEdit[Number_I][Number_J][1]);
        $(Array_String_DivSlotInputTimeStart[Number_I] + Number_IDTemporary).val(Array_Number_SlotEdit[Number_I][Number_J][0]);
    }
}

    $("#workshop_number_latitude_edit").val(Object_ResultWorkshop[Number_Index - 1].Workshop_Number_Latitude);
    $("#workshop_number_longitude_edit").val(Object_ResultWorkshop[Number_Index - 1].Workshop_Number_Longitude);
    $("#workshop_string_name_edit").val(Object_ResultWorkshop[Number_Index - 1].Workshop_String_Name);

    //Because of Object_Marker_EditRegisterWorkshop_1 I need to load the Google Maps JavaScript file first then
    //    set this JavaScript.
    if(Object_Marker_EditRegisterWorkshop_1 === undefined){
        Object_Marker_EditRegisterWorkshop_1 = new google.maps.Marker({
            map: Object_Map_EditRegisterWorkshop_1,
            position: new google.maps.LatLng(
                Object_ResultWorkshop[Number_Index - 1].Workshop_Number_Latitude,
                Object_ResultWorkshop[Number_Index - 1].Workshop_Number_Longitude
            )
        });
    }
    else{
        Object_Marker_EditRegisterWorkshop_1.setPosition(new google.maps.LatLng(
            Object_ResultWorkshop[Number_Index - 1].Workshop_Number_Latitude,
            Object_ResultWorkshop[Number_Index - 1].Workshop_Number_Longitude
        ));
    }
    Object_Map_EditRegisterWorkshop_1.panTo(new google.maps.LatLng(
        Object_ResultWorkshop[Number_Index - 1].Workshop_Number_Latitude,
        Object_ResultWorkshop[Number_Index - 1].Workshop_Number_Longitude
    ));
});