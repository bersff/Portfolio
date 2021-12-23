/*Nav Burger*/

function onClickMenu(){
    document.getElementById("nav_burger").classList.toggle("active");
    document.getElementById("nav_link").classList.toggle("active");
}

function videoMenu(){
  document.getElementById("video_modal").classList.toggle("active");
  document.getElementById("video_modal_btn").classList.toggle("active");
  document.getElementById("modal_btn").classList.toggle("active");
}

/*-----------------------------------------------------------------------------*/

/*Slick*/

$('.main_slider').slick({
    arrows: false,
    dots: true,
    speed: 300,
    slidesToShow: 1,
  });

  /*-----------------------------------------------------------------------------*/

  /*Slick people*/

$('.people_slick').slick({
    arrows: true,
    dots: false,
    speed: 300,
    slidesToShow: 5,
    slideToScroll: 1,
    centerPadding: '60px',
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1068,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
          slideToScroll: 1,
        }
      },]
  });

  /*-----------------------------------------------------------------------------*/

  