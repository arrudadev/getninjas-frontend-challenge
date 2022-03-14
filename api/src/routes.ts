import { Router } from 'express';

import { getBudgetRequestFieldsController } from './useCases/GetBudgetRequestFields';

const router = Router();

router.get('/budget', (request, response) => {
  return getBudgetRequestFieldsController.handle(request, response);
});

export { router };
