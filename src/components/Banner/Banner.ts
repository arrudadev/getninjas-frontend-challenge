import * as bannerHTML from './banner.html';

import './banner.css';

export class Banner {
  public render(querySelector: string): void {
    const element = document.querySelector(querySelector);

    if (bannerHTML.default) {
      element.innerHTML = bannerHTML.default;
    } else {
      element.innerHTML += bannerHTML;
    }
  }
}
