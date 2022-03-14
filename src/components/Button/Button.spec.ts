import { Button } from './Button';

describe('Button component', () => {
  beforeEach(() => {
    document.body.innerHTML = '';

    const button = new Button({
      id: 'button-id',
      label: 'Button label',
      variant: 'solid',
    });

    button.render('body');
  });

  it('should render the button', () => {
    expect(document.querySelector('button#button-id')).toBeTruthy();
  });

  it('should render the button by variant', () => {
    expect(document.querySelector('button.button-solid')).toBeTruthy();
  });

  it('should render the button label', () => {
    expect(document.querySelector('button#button-id').innerHTML.trim()).toBe(
      'Button label',
    );
  });
});
