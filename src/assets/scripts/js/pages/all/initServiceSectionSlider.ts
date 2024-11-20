import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

export function initServiceSectionSlider() {
  const mediumBreakpoint = parseInt(
    window.getComputedStyle(document.documentElement).getPropertyValue('--layout-breakpoint-medium') || '992'
  );
  new Swiper('.services-section__slider', {
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
      [mediumBreakpoint]: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
