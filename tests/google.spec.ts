// test = cria um caso de teste
// expect = faz verificações (assertions)
import { test, expect } from '@playwright/test';

// Importa nossa classe GooglePage
import { GooglePage } from '../pages/GooglePage';

// Define o teste com um nome descritivo
test('abrir o Google', async ({ page }) => {

  // Cria uma instância da nossa página, passando a aba atual
  const googlePage = new GooglePage(page);

  // Navega até o Google (usando o baseURL configurado)
  await googlePage.goto();

  // Verifica se o título da aba contém "Google"
  await expect(page).toHaveTitle(/Google/i);
});