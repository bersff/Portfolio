/*Nav Burger*/

function onClickMenu(){
    document.getElementById("nav_burger").classList.toggle("active");
    document.getElementById("nav_link").classList.toggle("active");
}

/*-----------------------------------------------------------------------------*/

/*Header Slick*/

$('.header_slick').slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
  });

const newLocal = '.features_slick';
/*-----------------------------------------------------------------------------*/

/*Header Slick*/

$('.features_slick_contant').slick({
  dots: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

/*-----------------------------------------------------------------------------*/

/*Works tub list*/

/*$(document).ready(function() {
  $('.tabs_triggers_item').click(function(e){
    e.preventDefault();

    $('.tabs_triggers_item').removeClass('tabs_triggers_item--active');
    $('.tabs_content_item').removeClass('tabs_content_item--active');

    $(this).addClass('tabs_triggers_item--active');
    $($(this).attr('href')).addClass('tabs_content_item--active');
  })
})*/

document.querySelectorAll('.tabs_triggers_item').forEach((item) => 
item.addEventListener('click', function (e) {
  e.preventDefault();
  const id = e.target.getAttribute('href').replace('#', '');

  document.querySelectorAll('.tabs_triggers_item').forEach(
    (child) => child.classList.remove('tabs_triggers_item--active')
  );
  document.querySelectorAll('.tabs_content_item').forEach(
    (child) => child.classList.remove('tabs_content_item--active')
  );

  item.classList.add('tabs_triggers_item--active');
  document.getElementById(id).classList.add('tabs_content_item--active');
})

);

document.querySelector('.tabs_triggers_item').click();


/*-----------------------------------------------------------------------------*/

/*HTeam Slick*/

$('.team_slick').slick({
  dots: true,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

/*-----------------------------------------------------------------------------*/