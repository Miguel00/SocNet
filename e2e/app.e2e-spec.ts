import { SocialNetWorksPage } from './app.po';

describe('social-net-works App', () => {
  let page: SocialNetWorksPage;

  beforeEach(() => {
    page = new SocialNetWorksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
