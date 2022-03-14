import * as requiredFieldMessageHTML from './required-field-message.html';

import './required-field-message.css';

export class RequiredFieldMessage {
  public render(element: HTMLElement): void {
    if (requiredFieldMessageHTML.default) {
      element.innerHTML += requiredFieldMessageHTML.default;
    } else {
      element.innerHTML += requiredFieldMessageHTML;
    }
  }
}
