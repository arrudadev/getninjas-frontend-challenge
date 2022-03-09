import { Banner, Header } from '../../components';
import homeHTML from './home.html';

import './home.css';

export class Home {
  public render(querySelector: string): void {
    this.renderHeader(querySelector);

    this.renderMain(querySelector);

    const mainQuerySelector = `.main-container`;

    this.renderBanner(mainQuerySelector);
  }

  public renderMain(querySelector: string): void {
    const element = document.querySelector(querySelector);

    element.innerHTML += homeHTML;
  }

  private renderHeader(querySelector: string): void {
    const header = new Header();

    header.render(querySelector);
  }

  private renderBanner(querySelector: string): void {
    const banner = new Banner();

    banner.render(querySelector);
  }
}
