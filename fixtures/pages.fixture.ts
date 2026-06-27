// Importamos "test" como "base" (o test original do Playwright)
import { test as base, expect } from '@playwright/test';

// Importamos nosso Page Object de login
import { LoginPage } from '../pages/LoginPage';

// Define o "formato" das fixtures: vamos ter uma fixture chamada "loginPage"
type MyFixtures = {
  loginPage: LoginPage;
};

// Criamos um novo "test", estendendo o original (base)
export const test = base.extend<MyFixtures>({

  // Define como a fixture "loginPage" é criada
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

// Reexportamos o "expect" pra usar nos testes
export { expect };