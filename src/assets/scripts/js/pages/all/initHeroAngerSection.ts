import { findHtmlElement } from '../../helpers/dom';

export function initHeroAngerSection() {
  const heroSection = findHtmlElement('.hero-anger');
  const pageHeader = findHtmlElement('.page-header');
  const bargeElement = findHtmlElement('.hero-anger__barge-column', heroSection);
  const decorImgElement = findHtmlElement('.hero-anger__decor-image', heroSection);

  const calculateTopMagrinHeight = () => {
    bargeElement.style.paddingTop = `${pageHeader.clientHeight}px`;
    decorImgElement.style.marginTop = `${pageHeader.clientHeight}px`;
  };

  const mutObserver = new MutationObserver(calculateTopMagrinHeight);
  mutObserver.observe(pageHeader, {
    childList: true,
    subtree: true,
  });

  const resizeObserver = new ResizeObserver(calculateTopMagrinHeight);
  resizeObserver.observe(pageHeader);
}
