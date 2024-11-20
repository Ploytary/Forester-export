import { DebuggerMenuSlot } from './LayoutDebugger';

export class ImageDebugger implements DebuggerMenuSlot {
  private activeSettings: string[] = [];
  private mainButton: HTMLButtonElement;
  private images: HTMLImageElement[] = [];
  private lazyLoadBackgrounds: HTMLElement[] = [];
  private savedImages: { element: HTMLImageElement; src: string; srcset: string }[] = [];
  private savedBackgrounds: {
    element: HTMLElement;
    bgset: string;
    current: string;
    picture: HTMLPictureElement | null;
  }[] = [];
  private elementClasses = {
    button: 'button',
  };
  private settingsNames = {
    killImages: 'kill-images',
  };

  constructor() {
    this.images = Array.from(document.querySelectorAll('img'));
    this.lazyLoadBackgrounds = Array.from(document.querySelectorAll('[data-bgset]')) as HTMLElement[];

    const { mainButton } = this.render();
    this.mainButton = mainButton;
    this.addEvents();
  }
  getButton() {
    return this.mainButton;
  }

  getOwnMenu() {
    return null;
  }

  hasActiveSettings() {
    return Boolean(this.activeSettings.length);
  }

  render() {
    const mainButton = document.createElement('button');
    mainButton.classList.add(this.elementClasses.button);
    mainButton.type = 'button';
    mainButton.textContent = 'Kill images';
    return { mainButton };
  }

  addEvents() {
    this.mainButton.addEventListener('click', () => {
      if (this.activeSettings.includes(this.settingsNames.killImages)) {
        this.resurrectImages();
      } else {
        this.killImages();
      }
    });
  }

  saveImages(images: HTMLImageElement[]) {
    return images.map((element) => ({
      element: element,
      src: element.src,
      srcset: element.srcset,
    }));
  }

  saveLazyLoadBackgrounds(lazyLoadBackgrounds: HTMLElement[]) {
    return lazyLoadBackgrounds.map((element) => ({
      element: element,
      bgset: element.dataset.bgset ?? '',
      current: element.style.backgroundImage,
      picture: element.firstChild as HTMLPictureElement,
    }));
  }

  killImages() {
    this.savedImages = this.saveImages(this.images);
    this.savedBackgrounds = this.saveLazyLoadBackgrounds(this.lazyLoadBackgrounds);

    this.images.forEach((element) => {
      element.src = 'killed';
      element.srcset = 'killed';
    });

    this.lazyLoadBackgrounds.forEach((element) => {
      element.dataset.bgset = 'killed';
      element.style.backgroundImage = 'url("killed")';
      element.innerHTML = '';
    });

    this.activeSettings.push(this.settingsNames.killImages);
  }

  resurrectImages() {
    this.savedImages.forEach(({ element, src, srcset }) => {
      element.src = src;
      element.srcset = srcset;
    });

    this.savedBackgrounds.forEach(({ element, bgset, current, picture }) => {
      element.dataset.bgset = bgset;
      element.style.backgroundImage = current;
      picture && element.append(picture);
    });

    const findIndex = this.activeSettings.findIndex((item) => item === this.settingsNames.killImages);
    this.activeSettings.splice(findIndex);
  }
}
