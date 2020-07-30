$(window).scroll(function() {
    if($("#navbarResponsive").offset().top > 100){
        $("#navbarResponsive").addClass("navbar-shrink");
    } else {
        $("#navbarResponsive").removeClass("navbar-shrink");
    }
});

$(document).ready(function(){
    $(".menu-item").hover(function() {
        $(this).append("<i class=\"fas fa-chevron-right\"></i>");
    }, function(){
        $(this).find("i").remove();
  });
});