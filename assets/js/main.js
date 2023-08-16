;(function ($) {
  $(document).ready(function () {
    /*-------------------------------------------------------------------------------
    Javascript for preloader
    -------------------------------------------------------------------------------*/
    // $(window).on('load', function () {
    //   $('.preloader').fadeOut()
    // })

    /*-------------------------------------------------------------------------------
    javaScript for sticky header
    -------------------------------------------------------------------------------*/
    $('.header-area').sticky()

    $('.navbar-toggler').on('click', function () {
      $('.header-area, .offcanvas-wraper').toggleClass('active')
    })
    $('.navbar-toggler').on('click', function () {
      $('.menu-overlay').toggleClass('show')
    })

    // Set div display to none
    $(".cart-trigger").click(function(){
      // $(".cart-menu-wrap").css("display", "block");
      $(".cart-menu-wrap").slideDown(300);
    });
    
    // Set div display to block
    $(".cart-close").click(function(){
        // $(".cart-menu-wrap").css("display", "none");
        $(".cart-menu-wrap").slideUp(300);
    });
    /*-------------------------------------------------------------------------------
    popup video 
    -------------------------------------------------------------------------------*/
    $('.play-btn').magnificPopup({
      type: 'video',
    })

    /*---------------------------------
		Javascript for AOS animation
		----------------------------------*/
    AOS.init({
      duration: 1200,
      once: true,
    })

    /*-------------------------------------------------------------------------------
    Jobs product Slider 
    -------------------------------------------------------------------------------*/
    $('.product-slider-wrap').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
      centerPadding: '320px',
      responsive: [{
              breakpoint: 1200,
              settings: {
                centerPadding: '150px',
              },
          },
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: '250px',
              },
          },
          {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '150px',
              },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
              centerPadding: '0',
            },
        },
      ],
    })

    /*-------------------------------------------------------------------------------
    Jobs product Slider 
    -------------------------------------------------------------------------------*/
    $('.product-big').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.product-details-thumb'
    });
    $('.product-details-thumb').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.product-big',
      dots: true,
      focusOnSelect: true
    });

  })
})(jQuery)

  

window.addEventListener("resize", function() {
  "use strict"; window.location.reload(); 
});
document.addEventListener("DOMContentLoaded", function()
{
/////// Prevent closing from click inside dropdown
document.querySelectorAll('.dropdown-menu').forEach(function(element)
{
       element.addEventListener('click', function(e)
       {
               e.stopPropagation();
       });
})
// make it as accordion for larger screens
  let slackButton = $('.ktm-mega-menu');

  if (slackButton.length) {
      // Add mouseenter and mouseleave event listeners to each item with the class "ktm-mega-menu"
      slackButton.each(function(index, item) {
        const dataId = $(item).find('.ktm-mega-menu-toggle').attr('data-id');
        $(item).mouseenter(function() {
          $(`.dropdown-menu[data-id="${dataId}"]`).css('transform', 'translateY(-20px)').slideDown(50).css('transform', 'translateY(0px)');
        }).mouseleave(function() {
          $(`.dropdown-menu[data-id="${dataId}"]`).css('transform', 'translateY(0px)').slideUp(0);
        });
      });
  }

// make it as accordion for smaller screens

       // close all inner dropdowns when parent is closed
       document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown)
       {
               everydropdown.addEventListener('hidden.bs.dropdown', function()
               {
                       // after dropdown is hidden, then find all submenus
                       this.querySelectorAll('.submenu')
                               .forEach(function(everysubmenu)
                               {
                                       // hide every submenu as well
                                       everysubmenu
                                               .style
                                               .display =
                                               'none';
                               });
               })
       });
       document.querySelectorAll('.dropdown-menu a').forEach(function(element)
       {
               element.addEventListener('click', function(e)
               {
                       let nextEl = this.nextElementSibling;
                       if (nextEl && nextEl.classList
                               .contains('submenu'))
                       {
                               // prevent opening link if link needs to open dropdown
                               e.preventDefault();
                               console.log(nextEl);
                               if (nextEl.style.display ==
                                       'block')
                               {
                                       nextEl.style.display =
                                               'none';
                               }
                               else
                               {
                                       nextEl.style.display =
                                               'block';
                               }
                       }
               });
       })

// end if innerWidth
});
// DOMContentLoaded  end



// plus minus
document.querySelectorAll('.minus-btn').forEach(function(element){
  element.addEventListener('click', function(){
    let countInput = this.parentNode.querySelector(".count");
    let count = parseInt(countInput.value);
    if(count > 0){
      count -= 1;
      countInput.value = count;
    }
  });
});

// plus minus
document.querySelectorAll('.plus-btn').forEach(function(element){
  element.addEventListener('click', function(){
    let countInput = this.parentNode.querySelector(".count");
    let count = parseInt(countInput.value);
    count += 1;
    countInput.value = count;
  });
});

