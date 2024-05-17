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
          '<svg style="transform: translate(0%, -75%);" width="8" height="8">' +
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
  const swiper4 = new Swiper('.articles-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.articles-pagination',
      clickable: true,
    },
    breakpoints : {
      950: {
        slidesPerView: 3,
      },
      426: {
        slidesPerView: 2,
      }
    }
  });
  const swiper5 = new Swiper('.news-swiper', {
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        767: {
            slidesPerView: 2
        },
        0: {
            slidesPerView: 1
        }
    }
});
  /*const swiper2 = new Swiper('.card-swiper-e', {
    init: false,
    slidePerView: 1
  });*/
});