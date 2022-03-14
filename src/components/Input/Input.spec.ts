import { Input } from './Input';

describe('Input component', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should render the input', () => {
    const input = new Input({
      id: 'input-id',
      name: 'input-name',
      placeholder: 'Input label',
      required: true,
    });

    input.render(document.body);

    expect(document.querySelector('input#input-id')).toBeTruthy();
  });

  it('should render the input attribute name', () => {
    const input = new Input({
      id: 'input-id',
      name: 'input-name',
      placeholder: 'Input label',
      required: true,
    });

    input.render(document.body);

    expect(document.querySelector('input[name="input-name"]')).toBeTruthy();
  });

  it('should render the input attribute placeholder', () => {
    const input = new Input({
      id: 'input-id',
      name: 'input-name',
      placeholder: 'Input label',
      required: true,
    });

    input.render(document.body);

    expect(
      document.querySelector('input#input-id').getAttribute('placeholder'),
    ).toBe('Input label');
  });

  it('should render the input attribute required', () => {
    const input = new Input({
      id: 'input-id',
      name: 'input-name',
      placeholder: 'Input label',
      required: true,
    });

    input.render(document.body);

    expect(
      document.querySelector('input#input-id').getAttribute('required'),
    ).toBe('required');
  });

  it('should render the input without attribute required', () => {
    const input = new Input({
      id: 'input-id',
      name: 'input-name',
      placeholder: 'Input label',
      required: false,
    });

    input.render(document.body);

    expect(
      document.querySelector('input#input-id').getAttribute('required'),
    ).toBe(null);
  });
});
