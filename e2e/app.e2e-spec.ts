import { Vnt4techCardnewsPage } from './app.po';

describe('vnt4tech-cardnews App', function() {
  let page: Vnt4techCardnewsPage;

  beforeEach(() => {
    page = new Vnt4techCardnewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
