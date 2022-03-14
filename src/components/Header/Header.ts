import './header.css';

import * as headerHTML from './header.html';

export class Header {
  public render(elementSelector: string): void {
    const element = document.querySelector(elementSelector);

    if (headerHTML.default) {
      element.innerHTML += headerHTML.default;
    } else {
      element.innerHTML += headerHTML;
    }
  }
}
