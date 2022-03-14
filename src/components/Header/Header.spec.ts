import { Header } from './Header';

describe('Header component', () => {
  beforeEach(() => {
    document.body.innerHTML = '';

    const header = new Header();
    header.render('body');
  });

  it('should render the header', () => {
    expect(document.querySelector('header#header')).toBeTruthy();
  });

  it('should render the header logo', () => {
    expect(document.querySelector('img[alt="GetNinjas"]')).toBeTruthy();
  });

  it('should render the register professional button in header', () => {
    expect(document.querySelector('.button-link').innerHTML.trim()).toBe(
      'Cadastrar profissional',
    );
  });
});
