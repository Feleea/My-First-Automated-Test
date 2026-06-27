// Importamos "test" e "expect" do NOSSO arquivo de fixtures
import { test, expect } from '../fixtures/pages.fixture';

test('fazer login no sistema', async ({ loginPage, page }) => {
  // Navega até a tela de login
  await loginPage.goto();

  // Aceita o banner de cookies, se aparecer
  await loginPage.acceptCookies();

  // Realiza o login usando as credenciais do .env
  await loginPage.login(
    process.env.LOGIN_USER!,
    process.env.LOGIN_PASSWORD!
  );

  // Verifica se o login funcionou:
  // Esperamos que a URL mude para a página de processos (vimos no HTML
  // que o ReturnUrl padrão é "/sp/admin/Process/List")
  await expect(page).toHaveURL(/sp\/admin/);
});