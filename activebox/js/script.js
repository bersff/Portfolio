/*Nav Burger*/

function onClickMenu(){
    document.getElementById("nav_burger").classList.toggle("active");
    document.getElementById("nav_link").classList.toggle("active");
}

/*-------------------------------------------------------------------------*/

/*CLIENTS SLIDER*/

$('.clients_slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  /*-------------------------------------------------------------------------*/