import { browser, by, element } from 'protractor'

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl)
  }
  getTitleText(): Promise<string> {
    return element(by.css('app-root mat-toolbar h1')).getText() as Promise<string>
  }
}
