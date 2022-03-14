import fieldsJSON from '../../database/fields.json';
import { Budget } from '../../entities/Budget';
import { IBudgetRepository } from '../IBudgetRepository';

export class BudgetRepository implements IBudgetRepository {
  public getBudgetRequestFields(): Budget {
    const fields = fieldsJSON._embedded;

    return {
      requestFields: fields.request_fields,
      userFields: fields.user_fields,
    };
  }
}
