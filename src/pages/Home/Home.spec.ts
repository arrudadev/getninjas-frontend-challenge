import { Home } from './Home';

// eslint-disable-next-line
// @ts-ignore
window.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        requestFields: [],
        userFields: [],
      }),
  }),
);

describe('Home page', () => {
  beforeEach(async () => {
    document.body.innerHTML = '';

    const home = new Home();

    await home.render('body');
  });

  it('should render the home page', () => {
    expect(document.querySelector('main#main')).toBeTruthy();
  });

  it('should render the header', () => {
    expect(document.querySelector('header#header')).toBeTruthy();
  });

  it('should render the banner', () => {
    expect(document.querySelector('section#banner')).toBeTruthy();
  });

  it('should render the budget form', () => {
    expect(document.querySelector('section#budget-form')).toBeTruthy();
  });

  it('should render the footer', () => {
    expect(document.querySelector('footer#footer')).toBeTruthy();
  });
});
