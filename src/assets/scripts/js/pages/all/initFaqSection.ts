import { AccordionOptions, ModernAccordion } from '../../libs/ModernAccordion/ModernAccordion';

export function initFaqSection() {
  const variantAccordionOptions: AccordionOptions = {
    multiOpen: false,
    defaultOpenSlotIndex: false,
  };

  new ModernAccordion('.faq-section .accordion', variantAccordionOptions);
}
