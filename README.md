# Meu Primeiro Teste Automatizado

Projeto de estudo de testes automatizados end-to-end utilizando **Playwright** com **TypeScript**, seguindo o padrão de arquitetura **Page Object Model (POM)**.

##
Sobre o projeto

Este repositório foi criado para praticar conceitos de automação de testes, incluindo:

- Estruturação de testes com Playwright
- Padrão Page Object Model (POM)
- Configuração de ambiente de testes (`playwright.config.ts`)
- Execução em múltiplos navegadores (Chromium, Firefox, WebKit)

## Estrutura do projeto
├── pages/                  # Page Objects (representam páginas do site)

│   └── GooglePage.ts

├── tests/                  # Casos de teste

│   └── google.spec.ts

├── playwright.config.ts    # Configurações do Playwright

├── package.json

└── README.md
## Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd meu-primeiro-teste-automatizado
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Instalar os navegadores do Playwright

```bash
npx playwright install
```

### 4. Rodar os testes

```bash
npx playwright test
```

### 5. Ver o relatório de execução

```bash
npx playwright show-report
```

## Tecnologias utilizadas

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- Node.js

## Conceitos aplicados

- **Page Object Model (POM)**: cada página do site é representada por uma classe, separando a lógica de interação da lógica do teste.
- **baseURL**: configurado no `playwright.config.ts` para evitar repetição de URLs nos testes.
- **Multi-browser testing**: os testes rodam automaticamente em Chromium, Firefox e WebKit.

## Status do projeto

 Em desenvolvimento — projeto de estudo, novas funcionalidades e testes serão adicionados gradualmente.
