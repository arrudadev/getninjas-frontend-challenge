import { Textarea } from './Textarea';

describe('Textarea component', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should render the textarea', () => {
    const textarea = new Textarea({
      id: 'textarea-id',
      required: true,
      name: 'textarea-name',
      placeholder: 'textarea-placeholder',
    });

    textarea.render(document.body);

    expect(document.querySelector('textarea#textarea-id')).toBeTruthy();
  });

  it('should render the textarea attribute name', () => {
    const textarea = new Textarea({
      id: 'textarea-id',
      required: true,
      name: 'textarea-name',
      placeholder: 'textarea-placeholder',
    });

    textarea.render(document.body);

    expect(
      document.querySelector('textarea[name="textarea-name"]'),
    ).toBeTruthy();
  });

  it('should render the textarea attribute required', () => {
    const textarea = new Textarea({
      id: 'textarea-id',
      required: true,
      name: 'textarea-name',
      placeholder: 'textarea-placeholder',
    });

    textarea.render(document.body);

    expect(
      document.querySelector('textarea#textarea-id').getAttribute('required'),
    ).toBeTruthy();
  });

  it('should render the textarea without attribute required', () => {
    const textarea = new Textarea({
      id: 'textarea-id',
      required: false,
      name: 'textarea-name',
      placeholder: 'textarea-placeholder',
    });

    textarea.render(document.body);

    expect(
      document.querySelector('textarea#textarea-id').getAttribute('required'),
    ).toBeFalsy();
  });

  it('should render the textarea attribute placeholder', () => {
    const textarea = new Textarea({
      id: 'textarea-id',
      required: false,
      name: 'textarea-name',
      placeholder: 'textarea-placeholder',
    });

    textarea.render(document.body);

    expect(
      document
        .querySelector('textarea#textarea-id')
        .getAttribute('placeholder'),
    ).toBe('textarea-placeholder');
  });
});
