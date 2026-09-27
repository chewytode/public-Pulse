import type { Page, Locator } from "@playwright/test";
import { URLS } from "@data/urls";

export class LoginPage {
  readonly page: Page;

  // "Signup / Login" link in the header — takes you to the combined login/signup page
  readonly signupLoginLink: Locator;

  // Login form (left side of /login page)
  readonly loginEmailInput: Locator;
  readonly loginPasswordInput: Locator;
  readonly loginButton: Locator;
  readonly loginErrorMessage: Locator;

  // Signup form (right side of /login page)
  readonly signupNameInput: Locator;
  readonly signupEmailInput: Locator;
  readonly signupButton: Locator;
  readonly signupErrorMessage: Locator;

  // Header state once logged in
  readonly loggedInAsText: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.signupLoginLink = page.locator('a[href="/login"]');

    this.loginEmailInput = page.locator('input[data-qa="login-email"]');
    this.loginPasswordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.loginErrorMessage = page.getByText(
      "Your email or password is incorrect!",
    );

    this.signupNameInput = page.locator('input[data-qa="signup-name"]');
    this.signupEmailInput = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('button[data-qa="signup-button"]');
    this.signupErrorMessage = page.getByText("Email Address already exist!");

    this.loggedInAsText = page.getByText(/Logged in as/i);
    this.logoutLink = page.locator('a[href="/logout"]');
  }

  async goto() {
    await this.page.goto(URLS.login);
  }

  async login(email: string, password: string) {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);
    await this.loginButton.click();
  }

  async startSignup(name: string, email: string) {
    await this.signupNameInput.fill(name);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
  }

  async logout() {
    await this.logoutLink.click();
  }
}
