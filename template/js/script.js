$(document).ready(function () {
  // ketik otomatis
  var typed = new Typed('.ketik', {
    strings: ['Yaklep'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // carousel
  $('.konten').owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });

  // scrool up
  $(window).scroll(function () {
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
      $('#lm').addClass('show');
      $('.navbar').addClass('sticky');
    } else {
      $('.scroll-up-btn').removeClass('show');
      $('#lm').removeClass('show');
      $('.navbar').removeClass('sticky');
    }
  });

  // scroll up btn
  // $('.scroll-up-btn').click(function () {
  //   $('html').animate({ scrollTop: 0 });
  //   // removing smooth scroll on slide-up button click
  //   $('html').css('scrollBehavior', 'auto');
  // });
});

$(function () {
  $('[data-bs-toggle="popover"]').popover();
});

function printDiv(elementId) {
  var a = document.getElementById('printing-css').value;
  var b = document.getElementById(elementId).innerHTML;
  window.frames['print_frame'].document.title = document.title;
  window.frames['print_frame'].document.body.innerHTML = '<style>' + a + '</style>' + b;
  window.frames['print_frame'].window.focus();
  window.frames['print_frame'].window.print();
}

$('.kontenArtikel').owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeOut: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 2,
      nav: false,
    },
  },
});
