window.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.big-swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        var bulletSVGs = [
          '<circle cx="4" cy="4" r="8" stroke="black" stroke-width="1" fill="red" />',
          '<circle cx="4" cy="4" r="8" stroke="black" stroke-width="1" fill="red" />',
          '<circle cx="4" cy="4" r="8" stroke="black" stroke-width="1" fill="red" />',
          '<circle cx="4" cy="4" r="8" stroke="black" stroke-width="1" fill="red" />',
        ];

        return '<span class="' + className + '">' +
          '<svg width="8" height="8">' +
          bulletSVGs[index] +
          '</svg>' +
          '</span>';
      },
    },
  });
  const swiper2 = new Swiper('.feedback-swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.feedback-pagination',
      clickable: true
    },
    breakpoints: {
      950: {
        slidesPerView: 2,
        spaceBetween: 30,
      }
    }
  });
  const swiper3 = new Swiper('.partners-swiper', {
    width:100,
    loop: true,
  });
  /*const swiper2 = new Swiper('.card-swiper-e', {
    init: false,
    slidePerView: 1
  });*/
});