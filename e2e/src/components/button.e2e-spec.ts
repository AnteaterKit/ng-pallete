import { by, element } from 'protractor';
import { AppPage } from "../app.po";

describe('button test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Счетчик должен быть равен 1', async () => {
    page.navigateTo();

    await element(by.id('add-enabled')).click();
    expect(await element(by.id('qty')).getText()).toEqual('1');

    await element(by.id('add-disabled')).click();
    expect(await element(by.id('qty')).getText()).toEqual('1');

  });
});
