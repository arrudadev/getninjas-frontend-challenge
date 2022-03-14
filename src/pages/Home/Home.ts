import { Banner, BudgetForm, Footer, Header } from '../../components';
import * as homeHTML from './home.html';

import './home.css';

export class Home {
  public async render(querySelector: string): Promise<void> {
    this.renderHeader(querySelector);

    this.renderMain(querySelector);

    const mainQuerySelector = `.main-container`;
    this.renderBanner(mainQuerySelector);

    await this.renderBudgetForm(mainQuerySelector);

    this.renderFooter(querySelector);
  }

  private renderMain(querySelector: string): void {
    const element = document.querySelector(querySelector);

    if (homeHTML.default) {
      element.innerHTML += homeHTML.default;
    } else {
      element.innerHTML += homeHTML;
    }
  }

  private renderHeader(querySelector: string): void {
    const header = new Header();

    header.render(querySelector);
  }

  private renderBanner(querySelector: string): void {
    const banner = new Banner();

    banner.render(querySelector);
  }

  private async renderBudgetForm(querySelector: string): Promise<void> {
    const budgetForm = new BudgetForm();

    await budgetForm.render(querySelector);
  }

  private renderFooter(querySelector: string): void {
    const footer = new Footer();

    footer.render(querySelector);
  }
}
