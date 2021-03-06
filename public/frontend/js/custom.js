// var json = require('./countriesData');

// import countriesData from './countriesData.js';
// import * from './countriesData.js'


(function($) {

	"use strict";



	$(document).ready(function() {

		/* ----------------------------------------------------------- */
		/*  HIDE HEADER WHEN PORTFOLIO SLIDESHOW OPENED
    /* ----------------------------------------------------------- */

		$(".grid figure").on('click', function() {
			$("#navbar-collapse-toggle").addClass('hide-header');
		});

		/* ----------------------------------------------------------- */
		/*  SHOW HEADER WHEN PORTFOLIO SLIDESHOW CLOSED
    /* ----------------------------------------------------------- */

		$(".nav-close").on('click', function() {
			$("#navbar-collapse-toggle").removeClass('hide-header');
		});
		$(".nav-prev").on('click', function() {
			if ($('.slideshow ul li:first-child').hasClass('current')) {
				$("#navbar-collapse-toggle").removeClass('hide-header');
			}
		});
		$(".nav-next").on('click', function() {
			if ($('.slideshow ul li:last-child').hasClass('current')) {
				$("#navbar-collapse-toggle").removeClass('hide-header');
			}
		});

		/* ----------------------------------------------------------- */
		/*  AJAX CONTACT FORM
     /* ----------------------------------------------------------- */



    $('.carousel').carousel({
      interval: 8000
    })

		var current_fs, next_fs, previous_fs; //fieldsets
		var opacity;
    var tabVal = '#room';

    // check if password match
    $('#pwd').keyup(function() {
      let pwd = $(this).val();
      let cpwd = $('#cpwd').val();
      // 
      if (cpwd && cpwd !== pwd) {
        console.log('not match.....')
        $('#pass-checker').css('display', 'inline');
      } else {
        $('#pass-checker').css('display', 'none');
      }
    });

    $('#cpwd').keyup(function() {
      let cpwd = $(this).val();
      let pwd = $('#pwd').val();
      if (cpwd !== pwd) {
        console.log('not match.....')
        $('#pass-checker').css('display', 'inline');
      } else {
        $('#pass-checker').css('display', 'none');
      }
    })

    $('.nav-tabs li a').click( function () {
      tabVal = $(this).attr('href');
      $('.field-checker').css('display', 'none');
      if (tabVal = '#room') {
        $('input[name ="tab"]').attr('value', 'room')
      }
      if (tabVal = '#event') {
        $('input[name ="tab"]').attr('value', 'event')
      }
      // <input type="hidden" name="tab" value="event">

    });

    $('.nav-tabs a[href="#room"]').tab('show')


		$(".next").click(function(){
		
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();

      let current_Id = current_fs.prevObject[0].id;
   
      if (current_Id === 'account') {
   
        let email = $('input[name ="email"]').val();
        let uname = $('input[name ="uname"]').val();
        let cpwd  = $('input[name ="cpwd"]').val();

        if (!email || !uname || !cpwd ) {
          $('#field-checker').css('display', 'inline');
        } else {
          //Add Class Active
          $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
                
          //show the next fieldset
          next_fs.show();
          //hide the current fieldset with style
          current_fs.animate({opacity: 0}, {
            step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;
            
            current_fs.css({
            'display': 'none',
            'position': 'relative'
            });
            next_fs.css(
              {'opacity': opacity});
            },
            duration: 600
          });
        }

      }

      if (current_Id === 'personal') {

        let fname   = $('input[name ="fname"]').val();
        let lname   = $('input[name ="lname"]').val();
        let phno    = $('input[name ="phno"]').val();
        let address = $('input[name ="address"]').val();
        let phno_2  = $('input[name ="phno_2"]').val();
        $('.field-checker').css('display', 'none');
        if (!fname || !lname || !phno || !address || !phno_2  ) {
          $('.field-checker').css('display', 'inline');
          console.log('personal =>')
        } else {
          //Add Class Active
          $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
                
          //show the next fieldset
          next_fs.show();
          //hide the current fieldset with style
          current_fs.animate({opacity: 0}, {
            step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;
            
            current_fs.css({
            'display': 'none',
            'position': 'relative'
            });
            next_fs.css(
              {'opacity': opacity});
            },
            duration: 600
          });
        }
      }

      if (current_Id === 'reservation' && tabVal === '#event') {
        console.log('tabVal f=>', tabVal)

        let title    = $('input[name ="title"]').val();
        let eve_from = $('input[name ="eve_from"]').val();
        let eve_to   = $('input[name ="eve_to"]').val();
        let subject  = $('input[name ="subject"]').val();
        let notes    = $('input[name ="notes"]').val();
        let description  = $('textarea[name ="description"]').val();
        $('.field-checker').css('display', 'none');
        if (!title || !eve_from || !eve_to || !subject || !notes || !description  ) {
          $('.field-checker').css('display', 'inline');
        } else {
          //Add Class Active
          $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
                
          //show the next fieldset
          next_fs.show();
          //hide the current fieldset with style
          current_fs.animate({opacity: 0}, {
            step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;
            
            current_fs.css({
            'display': 'none',
            'position': 'relative'
            });
            next_fs.css(
              {'opacity': opacity});
            },
            duration: 600
          });
        }
      }       

      if (current_Id === 'reservation' && tabVal === '#room') {
        console.log('tabVal f=>', tabVal)

        let reserv_from   = $('input[name ="reserv_from"]').val();
        let reserv_to     = $('input[name ="reserv_to"]').val();
        let bed     = $('input[name ="bed"]').val();
        let level   = $('input[name ="level"]').val();
        let notes    = $('input[name ="room_notes"]').val();
        let description  = $('textarea[name ="room_description"]').val();
        $('.field-checker').css('display', 'none');
        
        if (!reserv_from || !reserv_to || !bed || !level || !notes || !description  ) {
          $('.field-checker').css('display', 'inline');
        } else {
          //Add Class Active
          $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
                
          //show the next fieldset
          next_fs.show();
          //hide the current fieldset with style
          current_fs.animate({opacity: 0}, {
            step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;
            
            current_fs.css({
            'display': 'none',
            'position': 'relative'
            });
            next_fs.css(
              {'opacity': opacity});
            },
            duration: 600
          });
        }
      }
      

		});
		
		$(".previous").click(function(){
		
      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();
      
      //Remove class active
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
      
      //show the previous fieldset
      previous_fs.show();
      
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
        step: function(now) {
        // for making fielset appear animation
        opacity = 1 - now;
        current_fs.css({
          'display': 'none',
          'position': 'relative'
        });
        previous_fs.css({'opacity': opacity});
      },
      duration: 600
      });
		});
		
		$('.radio-group .radio').click(function(){
      $(this).parent().find('.radio').removeClass('selected');
      $(this).addClass('selected');
		});
    
    // validate signup form on keyup and submit
		$("#reservForm").validate({
      rules: {
				uname: "required",
				pwd:   "required",
				cpwd:  "required",
				fname: "required",
				lname: "required",
				phno:  "required",
        address: "required",
        
        holdername: "required",
        cardno: "required",
        cvcpwd: "required",
        expmonth: "required",
        expyear: "required",
        

				uname: {
					required: true,
					minlength: 5
        },
				email: {
					required: true,
					email: true
        },
				pwd: {
					required: true,
					minlength: 6
				},
				cpwd: {
					required: true,
					minlength: 6,
					// equalTo: "#pwd"
				},
        fname: {
					required: true,
					minlength: 3
        },
        lname: {
					required: true,
					minlength: 3
        },
        phno: {
					required: true,
					minlength: 11
        },
        address: {
					required: true,
					minlength: 3
        }
        ,
        holdername: {
					required: true,
					minlength: 7
				},
        cardno: {
					required: true,
          minlength: 12,
          maxlength: 12,
				},
        cvcpwd: {
					required: true,
					minlength: 3,
					maxlength: 3,
				},
        expmonth: {
					required: true,
				},
        expyear: {
					required: true,
				}

			},
			messages: {
				uname: {
					required: "Please enter a user name",
					minlength: "Your user name must consist of at least 5 characters"
        },
        fname: {
					required: "Please enter a first name",
					minlength: "Your first name must consist of at least 3 characters"
        },
        lname: {
					required: "Please enter a lastname",
					minlength: "Your last name must consist of at least 3 characters"
				},
        phno: {
					required: "Please enter a phno",
					minlength: "Your phno must consist of at least 11 characters"
				},
        address: {
					required: "Please enter a address",
					minlength: "Your address must consist of at least 3 characters"
				},
				pwd: {
					required: "Please provide a password",
					minlength: "Your password must be at least 6 characters long"
				},
				cpwd: {
					required: "Please provide a password",
					minlength: "Your password must be at least 6 characters long",
					// equalTo: "Please enter the same password as above"
        },
        
        holdername: {
					required: "Please provide a holdername",
					minlength: "Your holdername must be at least 7 characters long"
        },
        cardno: {
					required: "Please provide a card no",
					minlength: "Your card no must be at min 12 number ",
					maxlength: "Your card no must be at max 12 number "
        },
        cvcpwd: {
					required:  "Please provide a cvcpwd",
					minlength: "Your cvcpwd must be at least 3 characters long"
        },
				email:    "Please enter a valid email address",
				expmonth: "Please select a valid ex pmonth ",
				expyear:  "Please enter a valid ex pyear",
			}
		});


		$(".submit").click(function(){
		  return false;
    })


  
    // $("#progressbar li").click( function () {

    //   let fs_index = $(this).index();
    //   current_fs = $(this).parent();
    //   previous_fs = $(this).parent().prev();
      
    //   //Remove class active
    //   $(this).eq($("fieldset").index(current_fs)).removeClass("active");
  
    //   $(this).addClass("active");
    //   $(this).show()
  
    //   console.log('fs_index =>', fs_index);
    //   console.log('current_fs =>', current_fs);
    //   console.log('previous_fs =>', previous_fs);
    // } );


    /* ----------------------------------------------------------- */
    // Initialize Swiper 
    /* ----------------------------------------------------------- */

    new Swiper('.swiper-container', {
      speed: 600,
      parallax: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    /* ----------------------------------------------------------- */
    /*    Initialize Swiper2 
    /* ----------------------------------------------------------- */
    new Swiper('.swiper-places', {
      effect: 'coverflow',
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    })

    /* ----------------------------------------------------------- */
    //  Initialize SmoothScroll 
    /* ----------------------------------------------------------- */
    new SmoothScroll('a[href*="#"]:not([data-easing])');

    // Initialize Swiper  places
     new Swiper('.swiper-placesss', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });

      new Swiper('.swiper-event', {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
      });


  });
  
    



})(jQuery);
