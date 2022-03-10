import footerHTML from './footer.html';

import './footer.css';

export class Footer {
  public render(querySelector: string): void {
    const element = document.querySelector(querySelector);
    element.innerHTML += footerHTML;
  }
}
