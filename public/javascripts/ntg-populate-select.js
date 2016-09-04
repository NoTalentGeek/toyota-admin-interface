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

//PENDING: I need to delete all slot form before adding new ones.
//Here I want to populate how many select out there.
//First I need to know how many data entry are there per workshop PER DAY.
//I will use this number to iterate the amount of necessary slot form.
var Number_SlotFridayEditLength = Object_ResultWorkshop[Number_Index - 1].Workshop_Array_String_SlotFriday.length;
var Number_SlotMondayEditLength = Object_ResultWorkshop[Number_Index - 1].Workshop_Array_String_SlotMonday.length;
var Number_SlotSaturdayEditLength = Object_ResultWorkshop[Number_Index - 1].Workshop_Array_String_SlotSaturday.length;
var Number_SlotSundayEditLength = Object_ResultWorkshop[Number_Index - 1].Workshop_Array_String_SlotSunday.length;
var Number_SlotThursdayEditLength = Object_ResultWorkshop[Number_Index - 1].Workshop_Array_String_SlotThursday.length;
var Number_SlotTuesdayEditLength = Object_ResultWorkshop[Number_Index - 1].Workshop_Array_String_SlotTuesday.length;
var Number_SlotWednesdayEditLength = Object_ResultWorkshop[Number_Index - 1].Workshop_Array_String_SlotWednesday.length;
//Create array so that it is easy to manage codes.
//Note that the index must be according to each array.
//For example "friday" is at index 0, hence Number_SlotFridayEditLength should also at index 0.
var Array_Number_SlotEditLenght = [
    Number_SlotFridayEditLength,
    Number_SlotMondayEditLength,
    Number_SlotSaturdayEditLength,
    Number_SlotSundayEditLength,
    Number_SlotThursdayEditLength,
    Number_SlotTuesdayEditLength,
    Number_SlotWednesdayEditLength
];
var Array_String_Day = ["friday", "monday", "saturday", "sunday", "thursday", "tuesday", "wednesday"];
var Array_String_DivSlot = [
    "#ntg_div_workshop_slot_friday_edit",
    "#ntg_div_workshop_slot_monday_edit",
    "#ntg_div_workshop_slot_saturday_edit",
    "#ntg_div_workshop_slot_sunday_edit",
    "#ntg_div_workshop_slot_thursday_edit",
    "#ntg_div_workshop_slot_tuesday_edit",
    "#ntg_div_workshop_slot_wednesday_edit"
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