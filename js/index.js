// init swiper
const swiper = new Swiper('.services__slider', {
    slidesPerView: 1.2,
    spaceBetween: 10,
    navigation: {
        prevEl: '.services__slider-arrow-prev',
        nextEl: '.services__slider-arrow-next',
      },
      breakpoints: {
       
       768: {
          slidesPerView: 3,
          spaceBetween: 20,
       },
       1100: {
        slidesPerView: 3,
        spaceBetween: 40,
     },
      

    }
});



const swiperAlbum = new Swiper('.album__slider',{
  slidesPerView: 1,
  navigation: {
    prevEl: '.album__slider-arrow-prev',
    nextEl: '.album__slider-arrow-next',
  },
});