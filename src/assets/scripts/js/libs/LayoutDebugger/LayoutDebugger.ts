import { CSSVariablesDebugger } from './CSSVariablesDebugger';
import { ImageDebugger } from './ImageDebugger';
import { TextDebugger } from './TextDebugger';
import './LayoutDebugger.scss';

export interface DebuggerMenuSlot {
  hasActiveSettings: () => boolean;
  getButton: () => HTMLButtonElement;
  render: () => Record<string, HTMLElement> | null;
  getOwnMenu: () => HTMLElement | null;
}

export class LayoutDebugger {
  private menuSlots: DebuggerMenuSlot[] = [];
  private state: StateManager = new BrowserStorage();
  private debuggerContainerElement: HTMLElement;
  private elementClasses = {
    container: 'debugger',
    expanded: 'debugger--expanded',
    mainButton: 'debugger__button',
    menuButton: 'debugger__menu-button',
    menuButtonActive: 'debugger__menu-button--active',
    menuList: 'debugger__menu',
    menuListWrapper: 'debugger__menu-wrapper',
    submenusList: 'debugger__submenus',
    submenuItem: 'debugger__submenu',
    submenuOpened: 'debugger__submenu--opened',
  };
  private stateKeys = {
    expanded: 'expanded',
  };

  constructor() {
    this.menuSlots = [new TextDebugger(this.state), new ImageDebugger(), new CSSVariablesDebugger()];
    const { debuggerContainerElement } = this.render();
    this.debuggerContainerElement = debuggerContainerElement;
    this.addEvents();
  }

  render() {
    const debuggerContainerElement = document.createElement('div');
    debuggerContainerElement.classList.add(this.elementClasses.container);
    const isOpen = this.state.get(this.stateKeys.expanded) ?? false;
    if (isOpen) {
      debuggerContainerElement.classList.add(this.elementClasses.expanded);
    }

    const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 223.913 159.916">
      <path fill="currentColor" d="M150.963,106.606c-8.045,18.31-20.342,28.691-39.238,28.579-18.648-.11-30.857-10.369-39.182-26.91a36.107,36.107,0,0,0-.574,3.979c-.1,2.495.063,5-.058,7.495-.23,4.731-3.471,8.083-7.748,8.171-4.523.092-7.984-3.28-8.142-8.292-.162-5.16-.518-10.394.166-15.466.348-2.571,2.354-5.383,4.418-7.138,2.467-2.1,5.937-2.971,8.69-4.8,1.244-.827,2.547-2.718,2.484-4.064-.075-1.585-1.222-3.878-2.556-4.531C53.93,76.143,56.154,77.62,55.977,60.7c-.017-1.666-.093-3.341.047-5,.378-4.461,3.554-7.58,7.7-7.69a7.955,7.955,0,0,1,8.153,7.764c.2,2.986-.1,6.009.158,8.986.094,1.077,1.172,2.067,1.8,3.1A15.063,15.063,0,0,0,76.5,66.162a10.475,10.475,0,0,0,3.571-8.788c-.5-7.169,2.194-13.284,7.154-18.533a5.749,5.749,0,0,0,1.18-4.517c-.884-3.939.133-6.994,3.423-9.095,3.587-2.292,6.929-1.37,10.043,1.3,2.646,2.271,4.258,5.777,8.849,5.6,4.049-.159,7.32-.686,10-4.116,2.75-3.521,6.449-5.547,10.931-3,4.046,2.3,5.115,5.779,3.472,10.25-.314.853.408,2.512,1.176,3.268,5.57,5.49,7.818,12.107,7.776,19.854-.012,2.2,1.272,4.6,2.513,6.553.8,1.268,2.6,1.9,3.959,2.821a28.53,28.53,0,0,0,1.368-4.935c.246-2.477-.094-5.011.152-7.487a7.975,7.975,0,0,1,8.062-7.328,7.874,7.874,0,0,1,7.734,7.649,107.078,107.078,0,0,1-.145,16.468c-.28,2.41-2.278,5.094-4.263,6.714-2.518,2.055-5.989,2.9-8.705,4.772a6.665,6.665,0,0,0-2.608,4.515,5.3,5.3,0,0,0,2.461,4.067c15.456,7.788,13.153,5.929,13.338,23.421.015,1.332.058,2.669-.019,4-.292,5.01-3.678,8.441-8.143,8.308-4.329-.13-7.517-3.4-7.768-8.166-.14-2.659.035-5.333-.068-8A44.916,44.916,0,0,0,150.963,106.606Zm-47.332,11.141v-45.8c-1.987,0-3.633,0-5.279,0-7.712.024-10.385,2.722-10.4,10.536-.013,4.824-.107,9.65.031,14.47C88.257,106.688,95,115.637,103.631,117.747ZM120.186,71.98v46.485c7.814-3.3,13.39-8.324,14.633-16.121s1.121-15.876.9-23.813c-.1-3.776-3.145-6.167-7.087-6.508C126,71.8,123.334,71.98,120.186,71.98Zm7.735-16.22c-.592-4.852-3.137-7.528-7.682-7.733a157.637,157.637,0,0,0-16.881.033c-4.45.277-6.847,3.075-7.311,7.7ZM39.986,52.317c-.243-5.985-.049-11.988-.041-17.983.015-11.576,4.721-16.857,16.4-18.418,4.637-.62,7.806-4.132,7.56-8.378C63.657,3.234,60.248.158,55.5.012a21.749,21.749,0,0,0-3.489.16A32.147,32.147,0,0,0,24,31.609c-.115,7.825.025,15.653-.045,23.479-.085,9.686-5.831,15.927-15.4,16.874C3.244,72.487.035,75.461,0,79.89c-.035,4.476,3.134,7.516,8.413,8.068,9.9,1.036,15.478,7.189,15.548,17.247.056,7.993-.141,15.99.07,23.978.425,16.154,13.947,29.968,29.842,30.715,5.777.271,9.66-2.588,10.022-7.379.357-4.719-3.05-7.989-8.911-8.555-8.875-.855-14.9-7.321-15.024-16.248-.078-5.494-.249-11,.03-16.483.6-11.75-1.389-22.563-10.793-31.212C37.321,71.986,40.412,62.859,39.986,52.317Zm143.988,59.322q0,6.749,0,13.5c-.006,12.054-4.534,17.242-16.474,18.878-4.649.636-7.737,4.119-7.49,8.447.247,4.3,3.673,7.36,8.437,7.448a23.812,23.812,0,0,0,3.983-.263,32.048,32.048,0,0,0,27.485-31.4c.124-7.829-.012-15.662.04-23.493.064-9.587,5.952-15.933,15.5-16.8,5.3-.484,8.461-3.466,8.464-7.978,0-4.529-3.148-7.513-8.442-8-9.544-.873-15.451-7.222-15.517-16.782-.055-8,.122-16-.058-23.993A32.041,32.041,0,0,0,170.466.057c-6.1-.436-10.147,2.426-10.453,7.391-.294,4.757,3.065,7.945,8.97,8.515,8.848.853,14.852,7.349,14.975,16.311.072,5.33.247,10.675-.032,15.992-.624,11.912,1.24,22.928,10.488,31.347C184.42,93.211,183.974,94.6,183.974,111.639Z"/>
    </svg>`;
    const debuggerButtonElement = document.createElement('button');
    debuggerButtonElement.classList.add(this.elementClasses.mainButton);
    debuggerButtonElement.innerHTML = svgMarkup;
    const buttonLabel = document.createElement('span');
    buttonLabel.classList.add('visually-hidden');
    buttonLabel.textContent = 'Expand/collapse menu';
    debuggerButtonElement.append(buttonLabel);
    debuggerContainerElement.append(debuggerButtonElement);

    const submenusElement = document.createElement('ul');
    submenusElement.classList.add(this.elementClasses.submenusList);
    debuggerContainerElement.append(submenusElement);

    const debuggerMenuWrapper = document.createElement('div');
    debuggerMenuWrapper.classList.add(this.elementClasses.menuListWrapper);
    debuggerContainerElement.append(debuggerMenuWrapper);

    const debuggerMenu = document.createElement('ul');
    debuggerMenu.classList.add(this.elementClasses.menuList);
    debuggerMenuWrapper.append(debuggerMenu);
    const menuButtons = this.menuSlots.map((menu) => {
      const menuButton = menu.getButton();
      menuButton.classList.add(this.elementClasses.menuButton);
      const ownSubmenu = menu.getOwnMenu();
      if (ownSubmenu) {
        ownSubmenu.classList.add(this.elementClasses.submenuItem);
        const submenuItem = document.createElement('li');
        submenuItem.append(ownSubmenu);
        submenusElement.append(submenuItem);
      }
      const menuItem = document.createElement('li');
      menuItem.append(menuButton);

      return menuItem;
    });
    debuggerMenu.append(...menuButtons);

    document.body.append(debuggerContainerElement);

    return { debuggerContainerElement };
  }

  expand() {
    this.debuggerContainerElement.classList.add(this.elementClasses.expanded);
    this.state.set(this.stateKeys.expanded, true);
  }

  collapse() {
    this.debuggerContainerElement.classList.remove(this.elementClasses.expanded);
    this.menuSlots.forEach((slot) => {
      const menu = slot.getOwnMenu();
      menu && menu.classList.remove(this.elementClasses.submenuOpened);
    });
    this.state.set(this.stateKeys.expanded, false);
  }

  switch() {
    const isOpen = this.state.get(this.stateKeys.expanded) ?? false;
    if (isOpen) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  addEvents() {
    this.debuggerContainerElement.addEventListener('click', (evt) => {
      const target = evt.target;
      if (!(target instanceof Element)) return;

      const isMainButton = target.closest('.' + this.elementClasses.mainButton);
      if (isMainButton) {
        this.switch();
      }

      this.menuSlots.forEach((slot) => {
        slot.getButton().classList.toggle(this.elementClasses.menuButtonActive, slot.hasActiveSettings());

        const slotMenu = slot.getOwnMenu();
        if (!slotMenu) return;
        if (slot.getButton() === target && slotMenu.classList.contains(this.elementClasses.submenuOpened)) {
          slotMenu.classList.remove(this.elementClasses.submenuOpened);
        } else {
          if (target === target.closest('.' + this.elementClasses.menuButton)) {
            slotMenu.classList.toggle(this.elementClasses.submenuOpened, slot.getButton() === target);
          }
        }
      });
    });
  }
}

type StateValues = boolean | string | string[] | number | number[] | object;

export interface StateManager {
  set: (key: string, value: StateValues) => void;
  get: (key: string) => StateValues | null;
}

class BrowserStorage implements StateManager {
  set(key: string, value: StateValues) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
}
