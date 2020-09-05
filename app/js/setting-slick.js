$('.main-banner__content').slick({
  infinite: true,
  // autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        // autoplay: true,
        arrows: false,
        autoplaySpeed: 1000
      }
    }
  ]
});


$('.main-about__tab').slick({
  infinite: true,
  // fade: true,
  // cssEase: 'linear',
  // autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        // dots: false
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        // dots: false,
        // autoplay: true,
        arrows: false,
        autoplaySpeed: 1000
      }
    }
  ]
});

$('.main-about__carousel').slick({
  infinite: true,
  fade: true,

  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 900,
      settings: {
        dots: false,
      }
    }
  ]
});



$('.main-gallery__carousel').slick({
  slidesToShow: 1,
  speed: 500,
  fade: true,
  // cssEase: 'linear',
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplaySpeed: 1000,
      }
    }
  ]
});

$('.main-blog__carousel').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  responsive: [{
    breakpoint: 600,
    settings: {
      arrows: false,
    }
  }]
});

$('.main-products__carousel').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  variableWidth: true,
  responsive: [{
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      // slidesToScroll: 3,
      infinite: true,
      variableWidth: false,
      // arrows: true,
    }
  }]
});