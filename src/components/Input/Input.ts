import './input.css';

type InputProps = {
  id: string;
  name: string;
  required: boolean;
  placeholder: string;
};

export class Input {
  private id: string;
  private name: string;
  private required: boolean;
  private placeholder: string;

  public constructor(props: InputProps) {
    this.id = props.id;
    this.name = props.name;
    this.required = props.required;
    this.placeholder = props.placeholder;
  }

  public render(formFieldElement: HTMLElement): void {
    const inputElement = document.createElement('input');

    inputElement.classList.add('budget-form-field-input');

    inputElement.setAttribute('id', this.id);
    inputElement.setAttribute('name', this.name);
    inputElement.setAttribute('placeholder', this.placeholder);

    if (this.required) {
      inputElement.setAttribute('required', 'required');
    }

    formFieldElement.appendChild(inputElement);
  }
}
