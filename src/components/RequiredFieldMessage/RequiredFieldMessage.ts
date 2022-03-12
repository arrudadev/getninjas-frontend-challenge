import requiredFieldMessageHTML from './required-field-message.html';

import './required-field-message.css';

export class RequiredFieldMessage {
  public render(element: HTMLElement): void {
    element.innerHTML += requiredFieldMessageHTML;
  }
}
