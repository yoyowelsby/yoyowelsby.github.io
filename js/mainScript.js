$('.slides').slick({
    autoplay:true,
    autoplaySpeed: 4500,
    dots: true,
    arrows: false,
    pauseOnHover: true,
    touchMove: true
        
      });


// When we click on the LI
$("ul.nav li").click(function(){
  // If this isn't already active
  if (!$(this).hasClass("active")) {
    // Remove the class from anything that is active
    $("li.active").removeClass("active");
    // And make this active
    $(this).addClass("active");
  }
});