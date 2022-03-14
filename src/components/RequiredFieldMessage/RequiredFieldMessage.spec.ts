import { RequiredFieldMessage } from './RequiredFieldMessage';

describe('RequiredFieldMessage component', () => {
  beforeEach(() => {
    document.body.innerHTML = '';

    const requiredFieldMessage = new RequiredFieldMessage();

    requiredFieldMessage.render(document.body);
  });

  it('should render the required field message', () => {
    expect(
      document
        .querySelector('span.form-required-field-message')
        .innerHTML.trim(),
    ).toBe('Este campo é requerido');
  });
});
