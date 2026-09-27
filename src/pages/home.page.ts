import type { Page, Locator } from "@playwright/test";
import { URLS } from "@data/urls";

export class HomePage {
  readonly page: Page;
  readonly signupLoginLink: Locator;
  readonly loggedInAsText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupLoginLink = page.locator(`a[href="${URLS.login}"]`);
    this.loggedInAsText = page.getByText(/Logged in as/i);
  }

  async goto() {
    await this.page.goto(URLS.home);
  }
}
