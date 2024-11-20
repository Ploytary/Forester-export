import { findHtmlElement } from '../../helpers/dom';

export function initPageHeader() {
  const pageHeader = findHtmlElement('.page-header');
  window.addEventListener(
    'scroll',
    () => {
      pageHeader.classList.toggle('page-header--scrolled', window.scrollY > 0);
    },
    { passive: true }
  );
}
