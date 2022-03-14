import { Request, Response } from 'express';

import { GetBudgetRequestFieldsUseCase } from './GetBudgetRequestFieldsUseCase';

export class GetBudgetRequestFieldsController {
  constructor(
    private getBudgetRequestFieldsUseCase: GetBudgetRequestFieldsUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const budgetRequestFields = this.getBudgetRequestFieldsUseCase.execute();

      return response.json(budgetRequestFields);
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' });
    }
  }
}
