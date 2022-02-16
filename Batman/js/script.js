const swiper = new Swiper('.main_slider', {
    slidesPerView: 2,
    spaceBetween: 30,
    // Optional parameters
    //direction: 'vertical',
    loop: true,
  
    // If we need pagination
    //pagination: {
      //el: '.swiper-pagination',
    //},
  
    // Navigation arrows
    navigation: {
      nextEl: '.main_slider_arrow',
      //prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      }
    }
  
    // And if we need scrollbar
    //scrollbar: {
     // el: '.swiper-scrollbar',
    //},
});
//Burger
let burger = document.querySelector('.menu__burger');
let closeMenu = document.querySelector('.header_menu__close');
let menuMobile = document.querySelector('.header');

burger.addEventListener('click', () => {
    menuMobile.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
    menuMobile.style.display = 'none';
});

const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.main_button__play');

buttonModal.addEventListener('click', (e) => {
    modalWindow.classList.add('active');
})

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal_inner');

    if (!isModal) {
      modalWindow.classList.remove('active');
    }
})