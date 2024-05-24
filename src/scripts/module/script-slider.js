window.addEventListener('DOMContentLoaded', () => {
  const big_swiper = new Swiper('.big-swiper', {
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
  if (window.innerWidth < 768) {
    const card_swiper = new Swiper('.card-swiper', {
      slidePerView: 1
    });
  }
  const feedback_swiper = new Swiper('.feedback-swiper', {
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
  const partners_swiper = new Swiper('.partners-swiper', {
    width:100,
    loop: true,
  });
  const articles_swiper = new Swiper('.articles-swiper', {
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
  const news_swiper = new Swiper('.news-swiper', {
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
});