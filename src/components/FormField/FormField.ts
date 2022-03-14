import { Input } from '../Input/Input';
import { RequiredFieldMessage } from '../RequiredFieldMessage/RequiredFieldMessage';
import { Select } from '../Select/Select';
import { Textarea } from '../Textarea/Textarea';

import './form-field.css';

type FormFieldType = {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
  values?: Record<string, string>;
};

export class FormField {
  private label: string;
  private type: string;
  private required: boolean;
  private placeholder?: string;
  private values?: Record<string, string>;

  public constructor(props: FormFieldType) {
    this.label = props.label;
    this.type = props.type;
    this.required = props.required;
    this.placeholder = props.placeholder || '';
    this.values = props.values || {};
  }

  public render(querySelector: string): void {
    this.renderFormField(querySelector);
  }

  private renderFormField(querySelector: string): void {
    const element = document.querySelector(querySelector);

    const formFieldElement = document.createElement('div');

    formFieldElement.classList.add('form-field');

    element.appendChild(formFieldElement);

    this.renderFormFieldLabel(formFieldElement);

    this.renderInputByType(formFieldElement, this.type);

    if (this.required) {
      this.renderRequiredFieldMessage(formFieldElement);
    }
  }

  private renderFormFieldLabel(element: HTMLElement): void {
    const label = document.createElement('label');

    label.classList.add('budget-form-field-label');
    label.setAttribute('for', this.label);
    label.innerHTML = this.label;

    element.appendChild(label);
  }

  private renderInputByType(element: HTMLElement, type: string): void {
    const inputTypes: {
      [key: string]: (element: HTMLElement) => void;
    } = {
      enumerable: this.renderSelect.bind(this),
      big_text: this.renderTextarea.bind(this),
      cep: this.renderInput.bind(this),
      small_text: this.renderInput.bind(this),
      email: this.renderInput.bind(this),
      phone: this.renderInput.bind(this),
    };

    inputTypes[type](element);
  }

  private renderSelect(element: HTMLElement): void {
    const select = new Select({
      id: this.label,
      values: this.values,
      required: this.required,
      name: this.label,
    });

    select.render(element);
  }

  private renderTextarea(element: HTMLElement): void {
    const textarea = new Textarea({
      id: this.label,
      required: this.required,
      name: this.label,
      placeholder: this.placeholder,
    });

    textarea.render(element);
  }

  private renderInput(element: HTMLElement): void {
    const input = new Input({
      id: this.label,
      required: this.required,
      name: this.label,
      placeholder: this.placeholder,
    });

    input.render(element);
  }

  private renderRequiredFieldMessage(element: HTMLElement): void {
    const requiredFieldMessage = new RequiredFieldMessage();

    requiredFieldMessage.render(element);
  }
}
