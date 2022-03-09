import { Header } from '../../components';
import homeHTML from './home.html';

import './home.css';

export class Home {
  public render(querySelector: string): void {
    this.renderHeader(querySelector);

    this.renderMain(querySelector);
  }

  public renderMain(querySelector: string): void {
    const element = document.querySelector(querySelector);

    element.innerHTML += homeHTML;
  }

  private renderHeader(querySelector: string): void {
    const header = new Header();

    header.render(querySelector);
  }
}
