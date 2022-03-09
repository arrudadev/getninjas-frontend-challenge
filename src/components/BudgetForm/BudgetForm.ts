import BudgetFormHTML from './budget-form.html';

import './budget-form.css';

export class BudgetForm {
  public render(querySelector: string): void {
    const element = document.querySelector(querySelector);
    element.innerHTML += BudgetFormHTML;
  }
}
