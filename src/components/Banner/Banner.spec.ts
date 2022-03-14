import { Banner } from './Banner';

describe('Banner component', () => {
  beforeEach(() => {
    document.body.innerHTML = '';

    const banner = new Banner();
    banner.render('body');
  });

  it('should render the banner section', () => {
    expect(document.querySelector('section#banner')).toBeTruthy();
  });

  it('should render the banner title', () => {
    expect(document.querySelector('h1.title').innerHTML.trim()).toBe(
      'Precisando de Cabeleireiros?',
    );
  });

  it('should render the banner subtitle', () => {
    expect(document.querySelector('p.subtitle').innerHTML.trim()).toBe(
      'Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.',
    );
  });

  it('should render the banner badges', () => {
    expect(document.querySelector('img[alt="Check"]')).toBeTruthy();

    expect(document.querySelectorAll('img[alt="Star"]').length).toBe(5);
  });

  it('should render the hairstylist image in banner', () => {
    expect(document.querySelector('img.banner-img')).toBeTruthy();

    expect(document.querySelector('img[alt="Cabeleireiro"]')).toBeTruthy();
  });
});
