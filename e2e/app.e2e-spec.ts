import { VIPPage } from './app.po';

describe('vip App', function() {
  let page: VIPPage;

  beforeEach(() => {
    page = new VIPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
