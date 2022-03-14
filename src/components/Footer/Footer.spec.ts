import { Footer } from './Footer';

describe('Footer component', () => {
  beforeEach(() => {
    document.body.innerHTML = '';

    const footer = new Footer();

    footer.render('body');
  });

  it('should render the footer', () => {
    expect(document.querySelector('footer#footer')).toBeTruthy();
  });

  it('should render the footer logo', () => {
    expect(document.querySelector('img[alt="GetNinjas"]')).toBeTruthy();
  });

  it('should render the footer links', () => {
    expect(document.querySelectorAll('.footer-link').length).toBe(3);
  });
});
