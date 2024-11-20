import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

export function initCostSection() {
  initServiceSectionSlider();
}

function initServiceSectionSlider() {
  new Swiper('.cost-section__slider', {
    modules: [Autoplay, Navigation],
    loop: true,
    autoplay: {
      delay: 10000,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
