import './textarea.css';

type TextareaProps = {
  id: string;
  name: string;
  required: boolean;
  placeholder: string;
};

export class Textarea {
  private id: string;
  private name: string;
  private placeholder: string;
  private required: boolean;

  public constructor(props: TextareaProps) {
    this.id = props.id;
    this.name = props.name;
    this.placeholder = props.placeholder;
    this.required = props.required;
  }

  public render(formFieldElement: HTMLElement): void {
    const textareaElement = document.createElement('textarea');

    textareaElement.classList.add('budget-form-field-textarea');

    textareaElement.setAttribute('id', this.id);
    textareaElement.setAttribute('name', this.name);
    textareaElement.setAttribute('placeholder', this.placeholder);

    if (this.required) {
      textareaElement.setAttribute('required', 'required');
    }

    formFieldElement.appendChild(textareaElement);
  }
}
