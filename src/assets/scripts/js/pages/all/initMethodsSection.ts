import { findHtmlElement } from '../../helpers/dom';
import { AccordionClassParams, AccordionOptions, ModernAccordion } from '../../libs/ModernAccordion/ModernAccordion';

export function initMethodsSection() {
  const variantsAccordionParams: AccordionClassParams = {
    slotClass: 'methods-section__variants-item',
    slotOpenClass: 'methods-section__variants-item--open',
    slotOpenedClass: 'methods-section__variants-item--opened',
    slotCloseClass: 'methods-section__variants-item--close',
    slotClosedClass: 'methods-section__variants-item--closed',
    summaryClass: 'methods-section__variants-item-term',
    triggerClass: 'methods-section__variants-item-trigger',
    iconClass: 'methods-section__variants-item-trigger .icon-button__icon',
  };

  const variantAccordionOptions: AccordionOptions = {
    classParams: variantsAccordionParams,
    multiOpen: false,
    defaultOpenSlotIndex: false,
  };

  new ModernAccordion('.methods-section__variants-list', variantAccordionOptions);

  const casesAccordionParams: AccordionClassParams = {
    slotClass: 'methods-section__case-item',
    slotOpenClass: 'methods-section__case-item--open',
    slotOpenedClass: 'methods-section__case-item--opened',
    slotCloseClass: 'methods-section__case-item--close',
    slotClosedClass: 'methods-section__case-item--closed',
    summaryClass: 'methods-section__case-item-trigger',
    triggerClass: 'methods-section__case-item-trigger',
    iconClass: 'methods-section__case-item-icon',
  };

  const casesAccordionOptions: AccordionOptions = {
    classParams: casesAccordionParams,
    multiOpen: false,
    defaultOpenSlotIndex: false,
  };

  new ModernAccordion('.methods-section__case-list', casesAccordionOptions);

  const caseElement = findHtmlElement('.methods-section__case');
  const caseTriggerElement = findHtmlElement('.methods-section__case-trigger-label');
  const caseTriggerTextElement = findHtmlElement('span', caseTriggerElement);
  let caseIsOpen = false;
  caseTriggerElement.addEventListener('click', () => {
    caseIsOpen = !caseIsOpen;
    const label = caseIsOpen ? 'Скрыть список' : 'Показать список';
    caseTriggerTextElement.textContent = label;
    caseElement.classList.toggle('methods-section__case--open', caseIsOpen);
  });
}
