// $(".counter").counterUp({ time: 3000 });

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

$(function () {
  // Owl Carousel
  var owl = $(".bannerslider");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    dots: false,
    nav: true,
    animateOut: "slideOutUp",
    autoplay: true,
    autoplaySpeed: 3000,
  });
});

$(function () {
  // Owl Carousel
  var owl = $(".productSlider");
  owl.owlCarousel({
    items: 4,
    margin: 10,
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
});

$(function () {
  // Owl Carousel
  var owl = $(".testimonialSlider");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    dots: false,
    nav: true,
    // autoplay: true,
    autoplaySpeed: 3000,
  });
});

$(".gallery").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$(document).ready(function () {
  $(".popup-gallery").magnificPopup({
    delegate: ".owl-item:not(.cloned) a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    },
  });
});

$(".partnerSlider").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  autoplay: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
    1200: {
      items: 6,
    },
  },
});

$(document).ready(function () {
  var windowWidth = $(window).width();
  if (windowWidth <= 1024)
    //for iPad & smaller devices
    $(".accordion-collapse").removeClass("show");
  $(".accordion-button").addClass("collapsed");
});

$(".product_slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplaySpeed: 3000,
  // speed: 6000,
  cssEase: "linear",
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        // speed: 6000,
        cssEase: "none",
        // vertical: false,
        // verticalSwiping: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        // speed: 6000,
        cssEase: "none",
        // vertical: false,
        // verticalSwiping: false,
      },
    },
  ],
});
$('a[data-bs-toggle="pill"]').on("shown.bs.tab", function (e) {
  $(".product_slider").slick("setPosition");
});
$(".tab_slider").slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  variableWidth: true,
});

AOS.init({
  duration: 2000,
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("hamburger-toggle")) {
    e.target.children[0].classList.toggle("active");
  }
});
