import bannerHTML from './banner.html';

import './banner.css';

export class Banner {
  public render(querySelector: string): void {
    const element = document.querySelector(querySelector);
    element.innerHTML += bannerHTML;
  }
}
