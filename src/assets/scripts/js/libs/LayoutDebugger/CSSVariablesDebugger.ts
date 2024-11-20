import { DebuggerMenuSlot } from './LayoutDebugger';
import { Color } from '../../helpers/color';
import { getCSSCustomPropsList } from '../../helpers/dom';
import { ModernAccordion } from '../ModernAccordion/ModernAccordion';
import './CSSVariablesDebugger.scss';

export class CSSVariablesDebugger implements DebuggerMenuSlot {
  private activeSettings: string[] = [];
  private mainButton: HTMLButtonElement;
  private ownMenu: HTMLElement;
  private elementClasses = {
    menu: 'css-vars-debugger',
    button: 'button',
    accordionContainer: 'accordion',
    accordionSlot: 'accordion__slot',
    accordionSummary: 'accordion__summary',
    accordionSummaryText: 'accordion__summary-text',
    accordionTrigger: 'accordion__trigger',
    accordionIcon: 'accordion__icon',
    accordionDetails: 'accordion__details',
    accordionDetailsInner: 'accordion__details-inner',
  };

  constructor() {
    const { menuElement, mainButton } = this.render();
    this.mainButton = mainButton;
    this.ownMenu = menuElement;
  }

  hasActiveSettings() {
    return Boolean(this.activeSettings.length);
  }

  getButton() {
    return this.mainButton;
  }

  getOwnMenu() {
    return this.ownMenu;
  }

  render() {
    const mainButton = document.createElement('button');
    mainButton.textContent = 'CSS Variables';
    mainButton.classList.add(this.elementClasses.button);
    mainButton.type = 'button';

    const menuElement = document.createElement('div');
    menuElement.classList.add(this.elementClasses.menu);

    const fieldGroups = [
      {
        label: 'layout',
        inputType: 'number',
      },
      {
        label: 'color',
        inputType: 'color',
      },
      {
        label: 'gap',
        inputType: 'number',
      },
      {
        label: 'dimension',
        inputType: 'number',
      },
    ];
    const varsToExclude = ['swiper', 'debugger', 'layout-breakpoint'];

    const cssCustomPropIndex = getCSSCustomPropsList();
    const groupSlots = fieldGroups
      .map(({ label, inputType }) => {
        const fields = cssCustomPropIndex.filter(
          ([propName]) => propName.includes(label) && !varsToExclude.some((exclude) => propName.includes(exclude))
        );
        if (fields.length) {
          const slot = document.createElement('div');
          slot.classList.add('accordion__slot');

          const slotSummary = document.createElement('dt');
          slotSummary.classList.add(this.elementClasses.accordionSummary);

          const trigger = document.createElement('button');
          trigger.type = 'button';
          trigger.classList.add(this.elementClasses.accordionTrigger);

          const summaryText = document.createElement('span');
          summaryText.classList.add(this.elementClasses.accordionSummaryText);
          summaryText.textContent = label;

          const summaryIcon = document.createElement('span');
          summaryIcon.classList.add(this.elementClasses.accordionIcon);
          summaryIcon.innerHTML = '+';

          const details = document.createElement('dd');
          details.classList.add(this.elementClasses.accordionDetails);

          const detailsInner = document.createElement('div');
          detailsInner.classList.add(this.elementClasses.accordionDetailsInner);

          slot.append(slotSummary, details);
          slotSummary.append(trigger);
          trigger.append(summaryText, summaryIcon);
          details.append(detailsInner);

          const fieldElements = fields.map(([name, value]) => {
            const detailscontent = document.createElement('p');
            const labelElement = document.createElement('label');
            labelElement.textContent = `${name}:`;

            const input = document.createElement('input');
            input.type = inputType;
            input.value = value;

            switch (inputType) {
              case 'color':
                input.value = Color.rgbChannelsToHex(Color.hslToRgb(value));
                break;
              case 'number':
                input.value = parseInt(value).toString();
                break;
            }

            detailscontent.append(labelElement);
            detailscontent.append(input);

            input.addEventListener('input', (evt) => {
              if (!(evt.target instanceof HTMLInputElement)) return;

              switch (inputType) {
                case 'number':
                  document.documentElement.style.setProperty(name, evt.target.value + 'px');
                  break;
                default:
                  document.documentElement.style.setProperty(name, evt.target.value);
              }
            });

            return detailscontent;
          });

          detailsInner.append(...fieldElements);
          return slot;
        } else {
          return null;
        }
      })
      .filter((slot): slot is HTMLDivElement => !!slot);

    const list = document.createElement('dl');
    list.classList.add(this.elementClasses.accordionContainer);
    list.append(...groupSlots);
    menuElement.append(list);

    new ModernAccordion(menuElement, { defaultOpenSlotIndex: false });

    return { menuElement, mainButton };
  }
}
