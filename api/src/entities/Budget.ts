import { BudgetField } from './BudgetField';

export class Budget {
  public requestFields: BudgetField[];
  public userFields: BudgetField[];

  public constructor(props: Budget) {
    Object.assign(this, props);
  }
}
