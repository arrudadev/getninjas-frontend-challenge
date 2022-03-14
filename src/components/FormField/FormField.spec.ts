import { FormField } from './FormField';

describe('FormField', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should render the form field', () => {
    const formField = new FormField({
      label: 'form-field-label',
      type: 'small_text',
      required: true,
      name: 'form-field-name',
      placeholder: 'form-field-placeholder',
    });

    formField.render('body');

    expect(document.querySelector('div.form-field')).toBeTruthy();
  });

  it('should render the form field label', () => {
    const formField = new FormField({
      label: 'form-field-label',
      type: 'small_text',
      required: true,
      name: 'form-field-name',
      placeholder: 'form-field-placeholder',
    });

    formField.render('body');

    expect(
      document.querySelector('div.form-field label.budget-form-field-label'),
    ).toBeTruthy();

    expect(
      document
        .querySelector('div.form-field label.budget-form-field-label')
        .innerHTML.trim(),
    ).toBe('form-field-label');
  });

  it('should render form field by type (small_text)', () => {
    const formField = new FormField({
      label: 'form-field-label',
      type: 'small_text',
      required: true,
      name: 'form-field-name',
      placeholder: 'form-field-placeholder',
    });

    formField.render('body');

    expect(
      document.querySelector('div.form-field input.budget-form-field-input'),
    ).toBeTruthy();
  });

  it('should render form field by type (cep)', () => {
    const formField = new FormField({
      label: 'form-field-label',
      type: 'cep',
      required: true,
      name: 'form-field-name',
      placeholder: 'form-field-placeholder',
    });

    formField.render('body');

    expect(
      document.querySelector('div.form-field input.budget-form-field-input'),
    ).toBeTruthy();
  });

  it('should render form field by type (email)', () => {
    const formField = new FormField({
      label: 'form-field-label',
      type: 'email',
      required: true,
      name: 'form-field-name',
      placeholder: 'form-field-placeholder',
    });

    formField.render('body');

    expect(
      document.querySelector('div.form-field input.budget-form-field-input'),
    ).toBeTruthy();
  });

  it('should render form field by type (phone)', () => {
    const formField = new FormField({
      label: 'form-field-label',
      type: 'phone',
      required: true,
      name: 'form-field-name',
      placeholder: 'form-field-placeholder',
    });

    formField.render('body');

    expect(
      document.querySelector('div.form-field input.budget-form-field-input'),
    ).toBeTruthy();
  });

  it('should render form field by type (enumerable)', () => {
    const formField = new FormField({
      label: 'form-field-label',
      type: 'enumerable',
      required: true,
      name: 'form-field-name',
      placeholder: 'form-field-placeholder',
    });

    formField.render('body');

    expect(
      document.querySelector('div.form-field select.budget-form-field-select'),
    ).toBeTruthy();
  });

  it('should render form field by type (big_text)', () => {
    const formField = new FormField({
      label: 'form-field-label',
      type: 'big_text',
      required: true,
      name: 'form-field-name',
      placeholder: 'form-field-placeholder',
    });

    formField.render('body');

    expect(
      document.querySelector(
        'div.form-field textarea.budget-form-field-textarea',
      ),
    ).toBeTruthy();
  });
});
