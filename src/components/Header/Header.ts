import './header.css';

import headerHTML from './header.html';

export class Header {
  public render(elementSelector: string): void {
    const element = document.querySelector(elementSelector);
    element.innerHTML += headerHTML;
  }
}
