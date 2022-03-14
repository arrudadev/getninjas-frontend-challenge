import * as footerHTML from './footer.html';

import './footer.css';

export class Footer {
  public render(querySelector: string): void {
    const element = document.querySelector(querySelector);

    if (footerHTML.default) {
      element.innerHTML += footerHTML.default;
    } else {
      element.innerHTML += footerHTML;
    }
  }
}
