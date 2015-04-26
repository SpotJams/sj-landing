$(document).ready(function() {
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
});

function scrollNav() {
  $('.nav a').click(function(){
    //Toggle Class
    $(".active").removeClass("active");
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 120
    }, 6000);
    return false;
  });
}


$('.scrollTop a').click(function(){
  $(".active").removeClass("active");
  $('html, body').stop().animate({scrollTop: 0}, 1500);
});

function scrollContact() {
  // $("#li-contact").click();
  $('html, body').stop().animate({
        scrollTop: $( "#twitter-section-div" ).offset().top - 120
    }, 6000);
}

scrollNav();
