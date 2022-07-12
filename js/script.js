//javascript document
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    }); 
    
     //Stick slider
  $('.testimonial-slider').slick({
    dots:true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    adaptativeHeight: true
  });
  
  });
 