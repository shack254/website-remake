
$(document).ready(function(){
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
        $('.over-lay').hover(function () {
        $(".project-titie").animate({opacity:'1'});
        },
        function () {
        $(".text-apperance").animate({opacity:'0.5'})
    });
    $("#submittion").submit(function(event){
        var name = $("input#name").val();
        var email =$("input#email").val();
        var message=$("input#message").val();
        if(name && email && message != " " ){
            alert( "message confirmed");
        }
        else{
            alert("invalid");
        }
        event.preventDefault();
       });
});