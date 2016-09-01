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
$("#ntg_select_workshop").change(function(){
    var Number_Index = $("#ntg_select_workshop").prop("selectedIndex");
    $("#workshop_number_latitude_edit").val(Obejct_ResultWorkshop[Number_Index - 1].Workshop_Number_Latitude);
    $("#workshop_number_longitude_edit").val(Obejct_ResultWorkshop[Number_Index - 1].Workshop_Number_Longitude);
    $("#workshop_string_name_edit").val(Obejct_ResultWorkshop[Number_Index - 1].Workshop_String_Name);

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