$(document).ready(function(){
    debugger;
    $(".design").click(function(){
        $("#design-hide").fadeIn();
        $("#design").fadeOut();
    });
    $(".dev").click(function(){
        $("#dev-hide").fadeIn();
        $("#dev").fadeOut();
    });
    $(".product").click(function(){
        $("#product-hide").fadeIn();
        $("#product").fadeOut();
    });
    $("p").click(function(){
        $("#design-hide").fadeOut();
        $("#design").fadeIn();
    });
    $("p").click(function(){
        $("#dev-hide").fadeOut();
        $("#dev").fadeIn();
    });
    $("p").click(function(){
        $("#product-hide").fadeOut();
        $("#product").fadeIn();
    });
});