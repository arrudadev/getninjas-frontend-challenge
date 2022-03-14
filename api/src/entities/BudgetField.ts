export class BudgetField {
  public name: string;
  public label: string;
  public type: string;
  public placeholder: string;
  public required: boolean;
  public mask?: string;
  public values?: Record<string, string>;

  public constructor(props: BudgetField) {
    Object.assign(this, props);
  }
}
