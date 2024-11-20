import { BurgerMenu, BurgerMenuParams } from '../../libs/BurgerMenu/BurgerMenu';

const mediumBreakpoint = parseInt(
  window.getComputedStyle(document.documentElement).getPropertyValue('--layout-breakpoint-medium') || '992'
);

const params: Required<BurgerMenuParams> = {
  containerClass: 'burger-menu',
  togglerButtonClass: 'page-header__burger-menu-button',
  openedClass: 'burger-menu--open',
  closeButtonClass: 'burger-menu__close-button',
  backdropClass: 'burger-menu__backdrop',
  closeBreakpoint: mediumBreakpoint,
};

export function initBurgerMenu() {
  new BurgerMenu('.burger-menu', params);
}
