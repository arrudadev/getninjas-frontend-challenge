import { Budget } from '../entities/Budget';

export interface IBudgetRepository {
  getBudgetRequestFields(): Budget;
}
