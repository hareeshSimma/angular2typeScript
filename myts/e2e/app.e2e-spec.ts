import { MytsPage } from './app.po';

describe('myts App', () => {
  let page: MytsPage;

  beforeEach(() => {
    page = new MytsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
