# CRM Demo - Baseado em um projeto real 

Uma aplicação moderna e responsiva de CRM (Customer Relationship Management) construída para demonstrar as melhores práticas em desenvolvimento de software com **Angular** no frontend e **Spring Boot** no backend. Este projeto serve como uma peça de portfólio, destacando uma arquitetura limpa, código manutenível e funcionalidades robustas.

## ✨ Principais Funcionalidades (Features)

* **Autenticação Segura:** Sistema de login completo com suporte para credenciais (usuário/senha) e login social através do **Google Sign-In**.
* **Arquitetura de Roteamento Robusta:**
    * **Route Guards** para proteger rotas (`authGuard`) e gerenciar o fluxo de login (`loginGuard`).
    * Redirecionamento automático após login/logout.
* **Layout Principal Responsivo (Application Shell):** Uma estrutura de layout principal com header fixo, sidebar de navegação retrátil para dispositivos móveis e uma área de conteúdo principal para renderizar as páginas da aplicação.
* **Módulo de Gerenciamento de Propostas (CRUD):**
    * Página para listar, buscar e gerenciar propostas.
    * Implementa um fluxo completo de CRUD (Create, Read, Update, Delete) através da interação com um componente de tabela genérico.
* **Gestão de Estado Reativa:** O estado do usuário é gerenciado de forma reativa com RxJS (`BehaviorSubject`), garantindo que a UI responda instantaneamente às mudanças de autenticação.
* **Estilização com SCSS e BEM:** A interface foi construída sem frameworks de UI como Tailwind, utilizando SCSS puro com a metodologia BEM para um CSS encapsulado e escalável.


## 🏛️ Decisões de Arquitetura

Este projeto foi construído com foco em padrões de design modernos para criar uma base escalável e de fácil manutenção.

* **Angular Standalone API:** A aplicação utiliza a arquitetura de componentes, diretivas e pipes standalone, eliminando a necessidade de `NgModules` e promovendo uma estrutura de dependências mais explícita e modular.
* **Estilização com SCSS + BEM:** Todo o CSS foi escrito do zero utilizando SCSS e a metodologia **BEM (Block, Element, Modifier)**. Essa abordagem garante um CSS encapsulado, sem conflitos e auto-documentado, sem a dependência de frameworks de UI como o Tailwind.
* **Serviços Centralizados:** A lógica de negócio e as chamadas de API são abstraídas em serviços injetáveis na camada `core`, mantendo os componentes "magros" e focados apenas na lógica de apresentação.
* **Componentes Smart vs. Dumb:** A estrutura dos componentes segue o padrão "Smart/Container" (nas páginas) e "Dumb/Presentation" (em `shared`), onde componentes reutilizáveis recebem dados via `@Input` e emitem eventos via `@Output`, aumentando a reutilização e facilitando os testes.
    * **Exemplo Prático:** A página `PropostaPageComponent` (Smart) é responsável por buscar os dados de propostas e definir a configuração das colunas. Ela então passa esses dados para o `ResourceTableComponent` (Dumb), que apenas se preocupa em renderizar a tabela e emitir eventos de ação, sem conhecer a lógica de negócio.
---
## 🛠️ Tech Stack

* **Frontend:**
    * [Angular](https://angular.dev/) (v19+)
    * [TypeScript](https://www.typescriptlang.org/)
    * [RxJS](https://rxjs.dev/)
    * [SCSS (BEM)](https://getbem.com/)
    * [@abacritt/angularx-social-login](https://www.npmjs.com/package/@abacritt/angularx-social-login)
* **Backend (Planejado):**
    * [Spring Boot](https://spring.io/projects/spring-boot)
    * [Spring Security](https://spring.io/projects/spring-security) (com JWT)
    * [Spring Data JPA](https://spring.io/projects/spring-data-jpa)
    * [PostgreSQL](https://www.postgresql.org/)
* **Ferramentas:**
    * [Angular CLI](https://angular.dev/tools/cli)
    * [Git](https://git-scm.com/) & [GitHub](https://github.com/)
    * [npm](https://www.npmjs.com/)

---
## 🚀 Rodando o Projeto Localmente

Siga os passos abaixo para configurar e executar o ambiente de desenvolvimento.

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão 18.13 ou superior)
* [Angular CLI](https://angular.dev/tools/cli) (versão 19 ou superior)
* [JDK](https://www.oracle.com/br/java/technologies/downloads) (Versão 23 ou superior)

### 1. Clone o Repositório
```bash
git clone [https://github.com/adriannparanhos/CRM-Demo.git](https://github.com/adriannparanhos/CRM-Demo.git)
cd crm-demo