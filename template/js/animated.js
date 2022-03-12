jQuery(function($) {

	$(document).ready(function () {
		$('#navbar .dropdown').hover(function () {
        	$(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
    	}, function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105)
    	});
	});

	//mega menu
	$(document).ready(function() {
		$(".megamenu").on("click", function(e) {
			e.stopPropagation();
		});
	});

	// owl carousel
	$(document).ready(function(){
	  $(".owl-carousel").owlCarousel({
	  	loop:true,
	  	autoplay:true,
	  	autoplayTimeout:5000,
	  	dots:false,
	  	nav:true,
	  	navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
	  	 responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 4
        }
      }
	  });
	});

	

	
});