import { Angular2CounterDemoPage } from './app.po';

describe('angular2-counter-demo App', function() {
  let page: Angular2CounterDemoPage;

  beforeEach(() => {
    page = new Angular2CounterDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
