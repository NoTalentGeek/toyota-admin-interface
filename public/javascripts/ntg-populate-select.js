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
$("#Admin_String_IDWorkshop_Register_Select").change(function(){
    var Number_Index = $("#Admin_String_IDWorkshop_Register_Select").prop("selectedIndex");
    $("#Admin_String_IDWorkshop_Register").val(Object_ResultWorkshopAdmin[Number_Index - 1]._id);
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
$("#ntg-select-car").change(function(){
    var Number_Index = $("#ntg-select-car").prop("selectedIndex");
    $("#Car_String_Name_Edit").val(Object_ResultCar[Number_Index - 1].Car_String_Name);
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
$("#ntg-select-user").change(function(){
    var Number_Index = $("#ntg-select-user").prop("selectedIndex");
    $("#User_String_Email_Edit").val(Object_ResultUser[Number_Index - 1].User_String_Email);
    $("#User_String_Name_Edit").val(Object_ResultUser[Number_Index - 1].User_String_Name);
});





//Workshop.
var Obejct_ResultWorkshop = undefined;
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
                Obejct_ResultWorkshop = _Object_Result;
            }
        );
    }
);
//Specifically for workshop when there is change in the selector box
//    also move the marker into the currently seelcted workshop.
$("#ntg-select-workshop").change(function(){
    var Number_Index = $("#ntg-select-workshop").prop("selectedIndex");
    $("#Workshop_Number_Latitude_Edit").val(Obejct_ResultWorkshop[Number_Index - 1].Workshop_Number_Latitude);
    $("#Workshop_Number_Longitude_Edit").val(Obejct_ResultWorkshop[Number_Index - 1].Workshop_Number_Longitude);
    $("#Workshop_String_Name_Edit").val(Obejct_ResultWorkshop[Number_Index - 1].Workshop_String_Name);

    if(Object_Marker_EditRegisterWorkshop_1 === undefined){
        Object_Marker_EditRegisterWorkshop_1 = new google.maps.Marker({
            map: Object_Map_EditRegisterWorkshop_1,
            position: new google.maps.LatLng(
                Obejct_ResultWorkshop[Number_Index - 1].Workshop_Number_Latitude,
                Obejct_ResultWorkshop[Number_Index - 1].Workshop_Number_Longitude
            )
        });
    }
    else{
        Object_Marker_EditRegisterWorkshop_1.setPosition(new google.maps.LatLng(
            Obejct_ResultWorkshop[Number_Index - 1].Workshop_Number_Latitude,
            Obejct_ResultWorkshop[Number_Index - 1].Workshop_Number_Longitude
        ));
    }
    Object_Map_EditRegisterWorkshop_1.panTo(new google.maps.LatLng(
        Obejct_ResultWorkshop[Number_Index - 1].Workshop_Number_Latitude,
        Obejct_ResultWorkshop[Number_Index - 1].Workshop_Number_Longitude
    ));
});