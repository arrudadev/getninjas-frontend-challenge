import { BudgetForm } from './BudgetForm';

type CustomDOMElement = Element & {
  name: string;
  value: string;
  required: boolean;
  click: () => void;
};

const budgetRequest = {
  requestFields: [
    {
      name: 'Qual será o serviço?',
      label: 'Qual será o serviço?',
      placeholder: 'Qual será o serviço?',
      mask: 'tipo de serviço',
      type: 'enumerable',
      required: true,
      values: {
        Coloração: 'Coloração',
        Corte: 'Corte',
        'Escova ': 'Escova ',
        'Escova progressiva/definitiva': 'Escova progressiva/definitiva',
        Luzes: 'Luzes',
        Manicure: 'Manicure',
        Pedicure: 'Pedicure',
        Penteado: 'Penteado',
      },
    },
    {
      name: 'Para quem será o serviço?',
      label: 'Para quem será o serviço?',
      placeholder: 'Para quem será o serviço?',
      mask: 'indique para quem será o serviço',
      type: 'enumerable',
      required: false,
      values: {
        Criança: 'Criança',
        Homem: 'Homem',
        Mulher: 'Mulher',
      },
    },
    {
      name: 'Informações Adicionais',
      label: 'Informações Adicionais',
      type: 'big_text',
      placeholder: 'Descreva o que você precisa',
      required: false,
    },
  ],
  userFields: [
    {
      name: 'cep',
      label: 'CEP',
      type: 'cep',
      placeholder: '',
      required: true,
    },
    {
      name: 'name',
      label: 'Nome',
      type: 'small_text',
      placeholder: '',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Ex: nome@email.com',
      required: true,
    },
    {
      name: 'phone',
      label: 'Celular',
      type: 'phone',
      placeholder: '',
      required: true,
    },
  ],
};

// eslint-disable-next-line
// @ts-ignore
window.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(budgetRequest),
  }),
);

window.alert = jest.fn();

describe('BudgetForm component', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should render the budget form', async () => {
    const budgetForm = new BudgetForm();

    await budgetForm.render('body');

    expect(document.querySelector('section#budget-form')).toBeTruthy();
  });

  it('should render the budget form title', async () => {
    const budgetForm = new BudgetForm();

    await budgetForm.render('body');

    expect(document.querySelector('h2.form-title')).toBeTruthy();
  });

  it('should render the budget form subtitle', async () => {
    const budgetForm = new BudgetForm();

    await budgetForm.render('body');

    expect(document.querySelector('p.form-subtitle')).toBeTruthy();
  });

  it('should fetch fields from API', async () => {
    const budgetForm = new BudgetForm();

    const spy = jest.spyOn(budgetForm, 'fetchBudgetRequestFields');

    await budgetForm.render('body');

    expect(spy).toHaveBeenCalled();
  });

  it('should render the budget form steps', async () => {
    const budgetForm = new BudgetForm();

    await budgetForm.render('body');

    expect(document.querySelector('h3.form-steps').innerHTML.trim()).toBe(
      'Etapa 1 de 2',
    );

    document.body.innerHTML = '';

    budgetForm.currentBudgetRequestType = 'userFields';

    await budgetForm.render('body');

    expect(document.querySelector('h3.form-steps').innerHTML.trim()).toBe(
      'Etapa 2 de 2',
    );
  });

  it('should render the budget form fields (requestFields)', async () => {
    const budgetForm = new BudgetForm();

    await budgetForm.render('body');

    expect(
      document.querySelector(
        'div.form-field select.budget-form-field-select[name="Qual será o serviço?"]',
      ),
    ).toBeTruthy();

    expect(
      document.querySelector(
        'div.form-field select.budget-form-field-select[name="Para quem será o serviço?"]',
      ),
    ).toBeTruthy();

    expect(
      document.querySelector(
        'div.form-field textarea.budget-form-field-textarea[name="Informações Adicionais"]',
      ),
    ).toBeTruthy();
  });

  it('should render the budget form fields (userFields)', async () => {
    const budgetForm = new BudgetForm();

    budgetForm.currentBudgetRequestType = 'userFields';

    await budgetForm.render('body');

    expect(
      document.querySelector(
        'div.form-field input.budget-form-field-input[name="CEP"]',
      ),
    ).toBeTruthy();

    expect(
      document.querySelector(
        'div.form-field input.budget-form-field-input[name="Nome"]',
      ),
    ).toBeTruthy();

    expect(
      document.querySelector(
        'div.form-field input.budget-form-field-input[name="Email"]',
      ),
    ).toBeTruthy();

    expect(
      document.querySelector(
        'div.form-field input.budget-form-field-input[name="Celular"]',
      ),
    ).toBeTruthy();
  });

  it('should render the budget form fields buttons from the first step', async () => {
    const budgetForm = new BudgetForm();

    await budgetForm.render('body');

    expect(document.querySelector('button#next-button')).toBeTruthy();

    expect(document.querySelector('button#back-button')).toBeFalsy();

    expect(document.querySelector('button#finish-button')).toBeFalsy();
  });

  it('should render the budget form fields buttons from the second step', async () => {
    const budgetForm = new BudgetForm();

    budgetForm.currentBudgetRequestType = 'userFields';

    await budgetForm.render('body');

    expect(document.querySelector('button#next-button')).toBeFalsy();

    expect(document.querySelector('button#back-button')).toBeTruthy();

    expect(document.querySelector('button#finish-button')).toBeTruthy();
  });

  it('should validate the form when next button was pressed', async () => {
    const budgetForm = new BudgetForm();

    await budgetForm.render('body');

    const spy = jest.spyOn(window, 'alert');

    document.querySelector<CustomDOMElement>('button#next-button').click();
    expect(spy).toHaveBeenCalled();
  });
});
