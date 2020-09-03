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



$('.main-models__carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
      }
    }
  ]
});


$('.publications-notice__carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }
  ]
});




$('.main-benefits__carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  responsive: [{
    breakpoint: 600,
    settings: {
      arrows: false,
    }
  }]
})






// $('.main-steps__content').slick({

//   responsive: [{

//       breakpoint: 900,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: false,
//         autoplay: true,
//         arrows: false,
//         autoplaySpeed: 1000
//       }
//     }
//   ]
// })

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: true,
  infinite: true,
  focusOnSelect: true,
  responsive: [{
      breakpoint: 997,
      settings: {
        arrows: false,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});

$('.main-clients__slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  infinite: true,

  asNavFor: '.main-clients__slider-nav'
});
$('.main-clients__slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.main-clients__slider-for',
  dots: false,
  arrows: true,
  centerMode: false,
  infinite: true,
  focusOnSelect: true
});

$('.main-about__carousel').slick({
  centerMode: true,
  // centerPadding: '60px',
  slidesToShow: 3,
  responsive: [{
      breakpoint: 997,
      settings: {
        arrows: false,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        // centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});