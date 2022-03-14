import './button.css';

type ButtonProps = {
  id: string;
  label: string;
  variant: string;
};

export class Button {
  private id: string;
  private label: string;
  private variant: string;

  public constructor(props: ButtonProps) {
    this.id = props.id;
    this.label = props.label;
    this.variant = props.variant;
  }

  public render(querySelector: string): void {
    const element = document.querySelector(querySelector);

    const buttonElement = document.createElement('button');

    buttonElement.classList.add('button');
    buttonElement.classList.add(`button-${this.variant}`);

    buttonElement.setAttribute('id', this.id);
    buttonElement.setAttribute('type', 'button');

    buttonElement.innerHTML = this.label;

    element.appendChild(buttonElement);
  }
}
