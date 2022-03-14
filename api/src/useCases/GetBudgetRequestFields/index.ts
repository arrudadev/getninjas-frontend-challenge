import { BudgetRepository } from '../../repositories/implementations/BudgetRepository';
import { GetBudgetRequestFieldsController } from './GetBudgetRequestFieldsController';
import { GetBudgetRequestFieldsUseCase } from './GetBudgetRequestFieldsUseCase';

const budgetRepository = new BudgetRepository();

const getBudgetRequestFieldsUseCase = new GetBudgetRequestFieldsUseCase(
  budgetRepository,
);

const getBudgetRequestFieldsController = new GetBudgetRequestFieldsController(
  getBudgetRequestFieldsUseCase,
);

export { getBudgetRequestFieldsController };
