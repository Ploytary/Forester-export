interface Options {
  dataset: { key: string; value: string };
  id: string;
}

type InputTypes = 'textarea' | 'text' | 'color' | 'number';

export function createInputField(
  label: string,
  type: InputTypes = 'text',
  value: string,
  options: Partial<Options> = {}
) {
  const inputField = document.createElement('p');
  inputField.classList.add('input-field');

  const labelElement = document.createElement('label');
  labelElement.classList.add('input-field__label');
  labelElement.textContent = label;

  let inputElement = null;
  switch (type) {
    case 'textarea':
      inputElement = document.createElement('textarea');
      inputElement.textContent = value;
      break;
    default:
      inputElement = document.createElement('input');
      inputElement.type = type;
      inputElement.value = value;
  }
  inputElement.classList.add('input-field__input');

  const { dataset, id } = options;
  const inputFieldId = id ?? 'input-' + Math.round(Math.random() * 9999);
  labelElement.htmlFor = inputFieldId;
  inputElement.id = inputFieldId;
  if (dataset) {
    inputElement.dataset[dataset.key] = dataset.value;
  }

  inputField.append(labelElement, inputElement);

  return inputField;
}
