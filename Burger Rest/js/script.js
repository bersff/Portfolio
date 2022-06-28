/*Nav Burger*/

function onClickMenu(){
    document.getElementById("nav_burger").classList.toggle("active");
    document.getElementById("nav_link").classList.toggle("active");
}

/*-----------------------------------------------------------*/

/*REVIEWS SLIDER*/

$('.reviews_slider__wrapper').slick({
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});

/*-----------------------------------------------------------*/

/*COOKS SLIDER*/

$('.cooks_slider__wrapper').slick({
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 840,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },

      ]
});

/*-----------------------------------------------------------*/