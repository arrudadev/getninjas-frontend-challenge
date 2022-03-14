import { Select } from './Select';

describe('Select component', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should render the select', () => {
    const select = new Select({
      id: 'select-id',
      values: {
        'option-1': 'Option 1',
        'option-2': 'Option 2',
      },
      required: true,
      name: 'select-name',
    });

    select.render(document.body);

    expect(document.querySelector('select#select-id')).toBeTruthy();
  });

  it('should render the select attribute name', () => {
    const select = new Select({
      id: 'select-id',
      values: {
        'option-1': 'Option 1',
        'option-2': 'Option 2',
      },
      required: true,
      name: 'select-name',
    });

    select.render(document.body);

    expect(document.querySelector('select[name="select-name"]')).toBeTruthy();
  });

  it('should render the select attribute required', () => {
    const select = new Select({
      id: 'select-id',
      values: {
        'option-1': 'Option 1',
        'option-2': 'Option 2',
      },
      required: true,
      name: 'select-name',
    });

    select.render(document.body);

    expect(
      document.querySelector('select#select-id').getAttribute('required'),
    ).toBeTruthy();
  });

  it('should render the select without attribute required', () => {
    const select = new Select({
      id: 'select-id',
      values: {
        'option-1': 'Option 1',
        'option-2': 'Option 2',
      },
      required: false,
      name: 'select-name',
    });

    select.render(document.body);

    expect(
      document.querySelector('select#select-id').getAttribute('required'),
    ).toBe(null);
  });

  it('should render the select options', () => {
    const select = new Select({
      id: 'select-id',
      values: {
        'option-1': 'Option 1',
        'option-2': 'Option 2',
      },
      required: true,
      name: 'select-name',
    });

    select.render(document.body);

    expect(
      document
        .querySelector('select#select-id option[value="option-1"]')
        .innerHTML.trim(),
    ).toBe('Option 1');

    expect(
      document
        .querySelector('select#select-id option[value="option-2"]')
        .innerHTML.trim(),
    ).toBe('Option 2');
  });

  it('should render the select options with default value', () => {
    const select = new Select({
      id: 'select-id',
      values: {
        'option-1': 'Option 1',
        'option-2': 'Option 2',
      },
      required: true,
      name: 'select-name',
    });

    select.render(document.body);

    expect(
      document
        .querySelector('select#select-id option[value=""]')
        .innerHTML.trim(),
    ).toBe('Selecione uma opção');

    expect(
      document
        .querySelector('select#select-id option[value="option-1"]')
        .innerHTML.trim(),
    ).toBe('Option 1');

    expect(
      document
        .querySelector('select#select-id option[value="option-2"]')
        .innerHTML.trim(),
    ).toBe('Option 2');
  });
});
