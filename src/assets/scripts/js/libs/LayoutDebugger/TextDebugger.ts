import { DebuggerMenuSlot, StateManager } from './LayoutDebugger';
import { createInputField } from './helpers';

export class TextDebugger implements DebuggerMenuSlot {
  private activeSettings: string[] = [];
  private mainButton: HTMLButtonElement;
  private ownMenu: HTMLElement;
  private overrideButton: HTMLButtonElement;
  private savedTextNodesValues: { node: CharacterData; value: string | null }[] = [];
  private state: StateManager;
  private elementClasses = {
    menu: 'text-debugger',
    button: 'button',
    buttonActive: 'button--active',
  };
  private stateKeys = {
    textExcerpt: 'textExcerpt',
    charCount: 'charCount',
  };
  private settingsNames = {
    overrideText: 'overrite-text',
  };
  private fieldValues = {
    textExcerpt:
      `Diverse and rich experience in the implementation of planned targets plays an important role in the formation of new proposals. 
      The significance of these problems is so obvious that the constant quantitative growth and scope of our activity represents an 
      interesting experiment in testing new proposals. Thus, the beginning of daily work on the formation of a position entails the 
      process of introducing and modernizing forms of development.`
        .split('\n')
        .join(''),
    charCount: 100,
  };

  constructor(state: StateManager) {
    this.state = state;
    const { menuElement, overrideButton, mainButton } = this.render();
    this.mainButton = mainButton;
    this.ownMenu = menuElement;
    this.overrideButton = overrideButton;

    this.addEvents();
  }

  hasActiveSettings() {
    return Boolean(this.activeSettings.length);
  }

  getOwnMenu() {
    return this.ownMenu;
  }

  getButton() {
    return this.mainButton;
  }

  render() {
    const mainButton = document.createElement('button');
    mainButton.classList.add('button');
    mainButton.type = 'button';
    mainButton.textContent = 'Text';

    const menuElement = document.createElement('div');
    menuElement.classList.add(this.elementClasses.menu);

    const excerptValue = (this.state.get(this.stateKeys.textExcerpt) ?? this.fieldValues.textExcerpt) as string;
    const charCountValue = (this.state.get(this.stateKeys.charCount) ?? this.fieldValues.charCount) as string;
    const excerptField = createInputField('Text excerpt:', 'textarea', excerptValue, {
      dataset: { key: 'fieldName', value: 'excerpt' },
    });
    const charCountField = createInputField('Chars count:', 'number', charCountValue, {
      dataset: { key: 'fieldName', value: 'chars-count' },
    });
    menuElement.append(excerptField, charCountField);

    const overrideButton = document.createElement('button');
    overrideButton.type = 'button';
    overrideButton.textContent = 'Override';
    overrideButton.classList.add(this.elementClasses.button);
    menuElement.append(overrideButton);

    return { menuElement, overrideButton, mainButton };
  }

  addEvents() {
    this.overrideButton.addEventListener('click', () => {
      if (this.activeSettings.includes(this.settingsNames.overrideText)) {
        this.restoreText();
      } else {
        this.overrideText();
      }

      this.overrideButton.classList.toggle(
        this.elementClasses.buttonActive,
        this.activeSettings.includes(this.settingsNames.overrideText)
      );
    });

    this.ownMenu.addEventListener('input', (evt) => {
      const target = evt.target;
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
        switch (target.dataset.fieldName) {
          case 'excerpt':
            this.state.set(this.stateKeys.textExcerpt, target.value ?? '');
            break;
          case 'chars-count':
            this.state.set(this.stateKeys.charCount, target.value ?? '');
            break;
        }

        this.restoreText();
        this.overrideButton.classList.toggle(
          this.elementClasses.buttonActive,
          this.activeSettings.includes(this.settingsNames.overrideText)
        );
      }
    });
  }

  getTextNodesIn(element: Node) {
    let textNodes: CharacterData[] = [];
    if (element instanceof Element && element.closest('.debugger')) return textNodes;
    for (let nodes = element.childNodes, i = nodes.length; i--; ) {
      const node = nodes[i];
      const nodeType = node.nodeType;
      if (node instanceof CharacterData) {
        node.data.trim() && textNodes.push(node);
      } else if (nodeType == 1 || nodeType == 0 || nodeType == 11) {
        textNodes = textNodes.concat(this.getTextNodesIn(node));
      }
    }

    return textNodes;
  }

  overrideText() {
    const charCount = (this.state.get(this.stateKeys.charCount) ?? this.fieldValues.charCount) as number;
    const textExcerpt = (this.state.get(this.stateKeys.textExcerpt) ?? this.fieldValues.textExcerpt) as string;
    const repeatCount = Math.ceil(charCount / textExcerpt.length);
    const textString = (repeatCount > 1 ? textExcerpt + ' ' : textExcerpt).repeat(repeatCount).slice(0, charCount);

    const textNodes = this.getTextNodesIn(document.body);
    this.savedTextNodesValues = textNodes.map((textNode) => ({
      node: textNode,
      value: textNode.textContent,
    }));
    textNodes.forEach((item) => {
      item.textContent = textString;
    });

    this.activeSettings.push(this.settingsNames.overrideText);
  }

  restoreText() {
    this.savedTextNodesValues.forEach((save) => {
      save.node.textContent = save.value;
    });

    const settingIndex = this.activeSettings.findIndex((setting) => setting === this.settingsNames.overrideText);
    this.activeSettings.splice(settingIndex);
  }
}
