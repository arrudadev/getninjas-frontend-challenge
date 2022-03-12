import './select.css';

type SelectProps = {
  id: string;
  options: SelectOption[];
  required: boolean;
  name: string;
};

export class Select {
  private id: string;
  private options: SelectOption[];
  private required: boolean;
  private name: string;

  public constructor(props: SelectProps) {
    this.id = props.id;
    this.options = props.options;
    this.required = props.required;
    this.name = props.name;
  }

  public render(formFieldElement: HTMLElement): void {
    const selectElement = document.createElement('select');

    selectElement.classList.add('budget-form-field-select');

    const optionElementDefault = document.createElement('option');

    optionElementDefault.innerHTML = 'Selecione uma opção';
    selectElement.appendChild(optionElementDefault);

    this.options.forEach(option => {
      const optionElement = document.createElement('option');

      optionElement.value = option.value;
      optionElement.innerHTML = option.label;

      selectElement.appendChild(optionElement);
    });

    selectElement.setAttribute('id', this.id);
    selectElement.setAttribute('name', this.name);

    if (this.required) {
      selectElement.setAttribute('required', 'required');
    }

    formFieldElement.appendChild(selectElement);
  }
}
