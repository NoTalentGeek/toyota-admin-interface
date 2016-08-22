//Car.
var Object_Result_Car = undefined;
angular.module("ng_app_page_edit_register_car", [])
.controller(
    "ng_controller_page_edit_register_car",
    function ($scope, $http){
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
            function (_Object_Result){
                $scope.ng_options_select_car = _Object_Result;
                Object_Result_Car = _Object_Result;
            }
        );
    }
);
$("#ntg-select-car").change(function(){
    var Number_Index = $("#ntg-select-car").prop("selectedIndex");
    $("#Car_String_Name_Edit").val(Object_Result_Car[Number_Index - 1].Car_String_Name);
});




//User.
var Object_Result_User = undefined;
angular.module("ng_app_page_edit_register_user", [])
.controller(
    "ng_controller_page_edit_register_user",
    function ($scope, $http){
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
            function (_Object_Result){
                $scope.ng_options_select_user = _Object_Result;
                Object_Result_User = _Object_Result;
            }
        );
    }
);
$("#ntg-select-user").change(function(){
    var Number_Index = $("#ntg-select-user").prop("selectedIndex");
    $("#User_String_Email_Edit").val(Object_Result_User[Number_Index - 1].User_String_Email);
    $("#User_String_Name_Edit").val(Object_Result_User[Number_Index - 1].User_String_Name);
});





//Workshop.
var Object_Result_Workshop = undefined;
angular.module("ng_app_page_edit_register_workshop", [])
.controller(
    "ng_controller_page_edit_register_workshop",
    function ($scope, $http){
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
            function (_Object_Result){
                $scope.ng_options_select_workshop = _Object_Result;
                Object_Result_Workshop = _Object_Result;
            }
        );
    }
);
//Specifically for workshop when there is change in the selector box
//    also move the marker into the currently seelcted workshop.
$("#ntg-select-workshop").change(function(){
    var Number_Index = $("#ntg-select-workshop").prop("selectedIndex");
    $("#Workshop_Number_Latitude_Edit").val(Object_Result_Workshop[Number_Index - 1].Workshop_Number_Latitude);
    $("#Workshop_Number_Longitude_Edit").val(Object_Result_Workshop[Number_Index - 1].Workshop_Number_Longitude);
    $("#Workshop_String_Name_Edit").val(Object_Result_Workshop[Number_Index - 1].Workshop_String_Name);

    if(Object_Marker_EditRegisterWorkshop_1 === undefined){
        Object_Marker_EditRegisterWorkshop_1 = new google.maps.Marker({
            map: Object_Map_EditRegisterWorkshop_1,
            position: new google.maps.LatLng(
                Object_Result_Workshop[Number_Index - 1].Workshop_Number_Latitude,
                Object_Result_Workshop[Number_Index - 1].Workshop_Number_Longitude
            )
        });
    }
    else{
        Object_Marker_EditRegisterWorkshop_1.setPosition(new google.maps.LatLng(
            Object_Result_Workshop[Number_Index - 1].Workshop_Number_Latitude,
            Object_Result_Workshop[Number_Index - 1].Workshop_Number_Longitude
        ));
    }
    Object_Map_EditRegisterWorkshop_1.panTo(new google.maps.LatLng(
        Object_Result_Workshop[Number_Index - 1].Workshop_Number_Latitude,
        Object_Result_Workshop[Number_Index - 1].Workshop_Number_Longitude
    ));
});