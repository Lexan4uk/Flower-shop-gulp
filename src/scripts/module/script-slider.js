window.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.big-swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<svg class="' + className + '" width="10" height="10"><circle cx="10" cy="10" r="20"/></svg>';
      },
      bulletClass: 'my-bullet-class',
      bulletActiveClass: 'my-bullet-active-class'    
    },
  });
  const swiper2 = new Swiper('.feedback-swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.feedback-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<svg class="' + className + '" width="10" height="10"><circle cx="10" cy="10" r="20"/></svg>';
      },
      bulletClass: 'my-bullet-class',
      bulletActiveClass: 'my-bullet-active-class'   
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
      renderBullet: function (index, className) {
        return '<svg class="' + className + '" width="10" height="10"><circle cx="10" cy="10" r="20"/></svg>';
      },
      bulletClass: 'my-bullet-class',
      bulletActiveClass: 'my-bullet-active-class'   
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
  const swiper6 = new Swiper('.card-swsiper', {
    slidePerView: 1
  });
});