import { IBudgetRepository } from '../../repositories/IBudgetRepository';

export class GetBudgetRequestFieldsUseCase {
  constructor(private budgetRepository: IBudgetRepository) {}

  execute() {
    const budgetRequestFields = this.budgetRepository.getBudgetRequestFields();
    return budgetRequestFields;
  }
}
