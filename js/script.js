$('.reviews__items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $(".prevArrow"),
    nextArrow: $(".nextArrow"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 325,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });