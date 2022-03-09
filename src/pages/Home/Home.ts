import homeHTML from './home.html';

import './home.css';

export class Home {
  public render(querySelector: string): void {
    this.renderMain(querySelector);
  }

  public renderMain(querySelector: string): void {
    const element = document.querySelector(querySelector);

    element.innerHTML += homeHTML;
  }
}
