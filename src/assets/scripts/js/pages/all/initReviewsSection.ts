import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

export function initReviewsSection() {
  initReviewsSlider();
}

function initReviewsSlider() {
  new Swiper('.reviews-section__slider', {
    modules: [Autoplay, Navigation],
    loop: true,
    autoplay: {
      delay: 10000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
