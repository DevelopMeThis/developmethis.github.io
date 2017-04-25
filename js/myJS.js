

//scroll spy smooth 

// Add smooth scrolling on all links inside the navbar
$("#navbarScroll a, #particles-js a,#we-section a, #services a,#accomplishments a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});


//scroll to nav bar after 100 slide
/*$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $('#scrollDiv').fadeIn('slow');
        }
        else {
            $('#scrollDiv').fadeOut('slow');
        }
    });
});​*/




//selfMadeStickyclassAdder

$(document).ready(function(){
	var weOffset=$("#we-section").offset().top;
	$(window).scroll(function(){
		var scrollPosition = $(window).scrollTop();
		if(scrollPosition>= weOffset){
			$("nav").addClass("navbar-fixed-top");
			$("nav").removeClass("hidden");
			$("nav").addClass("animated fadeIn");
		}
		else{
			
			$("nav").removeClass("animated fadeIn");
			$("nav").addClass("animated fade");
			$("nav").addClass("hidden");
			$("nav").removeClass("navbar-fixed-top");
			
		}
	});
});


