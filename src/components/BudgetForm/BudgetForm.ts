import { Button } from '../Button/Button';
import { FormField } from '../FormField/FormField';
import BudgetFormHTML from './budget-form.html';

import './budget-form.css';

type Field = {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
  values?: Record<string, string>;
};

type BudgetRequest = {
  requestFields: Field[];
  userFields: Field[];
};

type BudgetRequestType = 'requestFields' | 'userFields';

type FormFieldDOM = Element & {
  name: string;
  value: string;
  required: boolean;
};

type BudgetQuestion = {
  question: string;
  answer: string;
};

type Budget = {
  requestFields: BudgetQuestion[];
  userFields: BudgetQuestion[];
};

export class BudgetForm {
  public budgetRequest: BudgetRequest;
  public currentBudgetRequestType: BudgetRequestType;
  public budget: Budget;

  public constructor() {
    this.currentBudgetRequestType = 'requestFields';
    this.budget = {
      requestFields: [],
      userFields: [],
    };
  }

  public async render(querySelector: string): Promise<void> {
    const element = document.querySelector(querySelector);
    element.innerHTML += BudgetFormHTML;

    await this.fetchBudgetRequestFields();

    this.renderForm();
  }

  private async fetchBudgetRequestFields(): Promise<void> {
    this.budgetRequest = {
      requestFields: [
        {
          name: 'Qual será o serviço?',
          label: 'Qual será o serviço?',
          placeholder: 'Qual será o serviço?',
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
          type: 'enumerable',
          required: false,
          values: {
            Criança: 'Criança',
            Homem: 'Homem',
            Mulher: 'Mulher',
          },
        },
        {
          name: 'O serviço será para quantas pessoas?',
          label: 'O serviço será para quantas pessoas?',
          placeholder: 'O serviço será para quantas pessoas?',
          type: 'enumerable',
          required: false,
          values: {
            '1': '1',
            '2': '2',
            'Mais de 3': 'Mais de 3',
          },
        },
        {
          name: 'Para quando você precisa deste serviço?',
          label: 'Para quando você precisa deste serviço?',
          placeholder: 'Para quando você precisa deste serviço?',
          type: 'enumerable',
          required: true,
          values: {
            'Hoje ou nos próximos dias': 'Hoje ou nos próximos dias',
            'Nos próximos 30 dias': 'Nos próximos 30 dias',
            'Nos próximos 3 meses': 'Nos próximos 3 meses',
            'Ainda não tenho previsão': 'Ainda não tenho previsão',
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
  }

  private renderForm(): void {
    this.cleanFormFields('#form-fields');

    this.renderFormFields('#form-fields');

    this.renderFormSteps();

    this.renderFormButtonActions('#form-fields');

    this.addEventHandlers();
  }

  private cleanFormFields(querySelector: string): void {
    const formFields = document.querySelector(querySelector);

    formFields.innerHTML = '';
  }

  private renderFormFields(querySelector: string): void {
    this.budgetRequest?.[this.currentBudgetRequestType].forEach(field => {
      const formField = new FormField(field);

      formField.render(querySelector);
    });
  }

  private renderFormSteps(): void {
    const formStepsElement = document.querySelector('.form-steps');

    if (this.currentBudgetRequestType === 'requestFields') {
      formStepsElement.innerHTML = 'Etapa 1 de 2';
    } else {
      formStepsElement.innerHTML = 'Etapa 2 de 2';
    }
  }

  private renderFormButtonActions(querySelector: string): void {
    const formActions = document.createElement('div');

    formActions.classList.add('form-actions');

    const element = document.querySelector(querySelector);

    element.appendChild(formActions);

    // if it is the budget request form, it is in the first step of the process, that is, it is not necessary to render the back button
    if (this.currentBudgetRequestType === 'requestFields') {
      this.renderButton({
        querySelector: '.form-actions',
        id: 'next-button',
        label: 'Próximo',
        variant: 'solid',
      });
    } else {
      this.renderButton({
        querySelector: '.form-actions',
        id: 'back-button',
        label: 'Voltar',
        variant: 'ghost',
      });

      this.renderButton({
        querySelector: '.form-actions',
        id: 'finish-button',
        label: 'Finalizar',
        variant: 'solid',
      });
    }
  }

  private renderButton({
    querySelector,
    id,
    label,
    variant,
  }: {
    querySelector: string;
    id: string;
    label: string;
    variant: 'solid' | 'ghost';
  }): void {
    const button = new Button({
      id,
      label,
      variant,
    });

    button.render(querySelector);
  }

  private addEventHandlers(): void {
    document.querySelector(`#next-button`)?.addEventListener('click', () => {
      if (this.formIsValid()) {
        this.saveAnswers();

        this.goToNextQuestions();
      } else {
        alert('Há campos obrigatórios que não foram preenchidos.');
      }
    });

    document.querySelector(`#finish-button`)?.addEventListener('click', () => {
      if (this.formIsValid()) {
        this.saveAnswers();

        console.log(this.budget);

        alert('Orçamento enviado com sucesso!');
      } else {
        alert('Há campos obrigatórios que não foram preenchidos.');
      }
    });

    document.querySelector(`#back-button`)?.addEventListener('click', () => {
      this.goToPreviousQuestions();
    });
  }

  private formIsValid(): boolean {
    let allRequiredQuestionsWasAnswered = true;

    function fieldIsValid(field: FormFieldDOM) {
      if (field.required && !field.value) {
        allRequiredQuestionsWasAnswered = false;
      }
    }

    document
      .querySelectorAll<FormFieldDOM>('.budget-form-field-select')
      .forEach(field => {
        fieldIsValid(field);
      });

    document
      .querySelectorAll<FormFieldDOM>('.budget-form-field-textarea')
      .forEach(field => {
        fieldIsValid(field);
      });

    document
      .querySelectorAll<FormFieldDOM>('.budget-form-field-input')
      .forEach(field => {
        fieldIsValid(field);
      });

    return allRequiredQuestionsWasAnswered;
  }

  private goToNextQuestions(): void {
    this.currentBudgetRequestType = 'userFields';

    this.renderForm();
  }

  private goToPreviousQuestions(): void {
    this.currentBudgetRequestType = 'requestFields';

    this.renderForm();
  }

  private saveAnswers(): void {
    const answers: BudgetQuestion[] = [];

    function addAnswer(field: FormFieldDOM) {
      answers.push({
        question: field.name,
        answer: field.value,
      });
    }

    document
      .querySelectorAll<FormFieldDOM>('.budget-form-field-select')
      .forEach(field => {
        addAnswer(field);
      });

    document
      .querySelectorAll<FormFieldDOM>('.budget-form-field-textarea')
      .forEach(field => {
        addAnswer(field);
      });

    document
      .querySelectorAll<FormFieldDOM>('.budget-form-field-input')
      .forEach(field => {
        addAnswer(field);
      });

    this.budget[this.currentBudgetRequestType] = answers;
  }
}
