// Importa os tipos do Playwright que vamos usar:
// Page = representa a aba do navegador
// Locator = representa um elemento específico da página (botão, input, etc.)
import { Page, Locator } from '@playwright/test';

// Classe que representa a página do Google
// Padrão "Page Object Model": cada página do site = uma classe
export class GooglePage {

  // Guarda a referência da aba do navegador
  readonly page: Page;

  // Guarda a referência do campo de busca
  readonly searchInput: Locator;

  // O construtor roda quando criamos "new GooglePage(page)"
  constructor(page: Page) {
    this.page = page;

    // Localiza o campo de busca na tela
    this.searchInput = page.locator('textarea[name="q"], input[name="q"]');
  }

  // Método que navega até a home do Google
  async goto() {
    // Como já configuramos o baseURL no config, 
    // podemos usar só '/' em vez da URL completa
    await this.page.goto('/');
  }
}