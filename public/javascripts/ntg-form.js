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