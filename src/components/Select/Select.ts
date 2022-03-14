import './select.css';

type SelectProps = {
  id: string;
  values: Record<string, string>;
  required: boolean;
  name: string;
};

export class Select {
  private id: string;
  private values: Record<string, string>;
  private required: boolean;
  private name: string;

  public constructor(props: SelectProps) {
    this.id = props.id;
    this.values = props.values;
    this.required = props.required;
    this.name = props.name;
  }

  public render(formFieldElement: HTMLElement): void {
    const selectElement = document.createElement('select');

    selectElement.classList.add('budget-form-field-select');

    const optionElementDefault = document.createElement('option');

    optionElementDefault.setAttribute('value', '');
    optionElementDefault.innerHTML = 'Selecione uma opção';
    selectElement.appendChild(optionElementDefault);

    for (const key in this.values) {
      const optionElement = document.createElement('option');

      optionElement.setAttribute('value', key);
      optionElement.innerHTML = this.values[key];

      selectElement.appendChild(optionElement);
    }

    selectElement.setAttribute('id', this.id);
    selectElement.setAttribute('name', this.name);

    if (this.required) {
      selectElement.setAttribute('required', 'required');
    }

    formFieldElement.appendChild(selectElement);
  }
}
