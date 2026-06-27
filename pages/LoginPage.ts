 //Login da Pag backoffice
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  // Botão "Aceitar Todos" do banner de cookies
  readonly cookieAcceptAllButton: Locator;

  // Campo de login (aceita CPF, e-mail ou matrícula)
  readonly loginInput: Locator;

  // Campo de senha
  readonly passwordInput: Locator;

  // Botão de enviar o formulário (input type="submit" com texto "Entrar")
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Usamos o ID, que é o seletor mais estável e específico possível
    this.cookieAcceptAllButton = page.locator('#cookie-accept-all');
    this.loginInput = page.locator('#Login');
    this.passwordInput = page.locator('#Password');

    // Esse botão é um <input type="submit">, não um <button>,
    // por isso localizamos pelo atributo "value" (o texto que aparece nele)
    this.loginButton = page.locator('input[type="submit"][value="Entrar"]');
  }

  // Navega até a tela de login (usa o baseURL do config)
  async goto() {
    await this.page.goto('/sp/admin/UserAdmin/LogOn');
  }

  // Aceita os cookies, somente se o banner estiver visível
  async acceptCookies() {
    // isVisible() verifica se o elemento está na tela
    // sem isso, o teste quebraria caso o cookie já tenha sido aceito antes
    if (await this.cookieAcceptAllButton.isVisible()) {
      await this.cookieAcceptAllButton.click();
    }
  }

  // Realiza o login preenchendo usuário e senha
  async login(username: string, password: string) {
    await this.loginInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}