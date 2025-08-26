# CRM Demo - Baseado em um projeto real 

Uma aplicação moderna e responsiva de CRM (Customer Relationship Management) construída para demonstrar as melhores práticas em desenvolvimento de software com **Angular** no frontend e **Spring Boot** no backend. Este projeto serve como uma peça de portfólio, destacando uma arquitetura limpa, código manutenível e funcionalidades robustas.

## ✨ Principais Funcionalidades (Features)

* **Autenticação Segura:** Sistema de login completo com suporte para credenciais (usuário/senha) e login social através do **Google Sign-In**.
* **Arquitetura Standalone:** Utiliza a arquitetura de componentes standalone do Angular para um código mais modular e explícito.
* **Estrutura de Projeto Profissional:** Organização de pastas e módulos seguindo as melhores práticas do mercado (`core`, `shared`, `pages`, `layout`).
* **Gestão de Estado Reativa:** O estado do usuário é gerenciado de forma reativa com RxJS (`BehaviorSubject`), garantindo que a UI responda instantaneamente às mudanças de autenticação.
* **Estilização com SCSS e BEM:** A interface foi construída sem frameworks de UI como Tailwind, utilizando SCSS puro com a metodologia BEM para um CSS encapsulado e escalável.
* **Roteamento e Guards:** Navegação protegida utilizando Route Guards para garantir que apenas usuários autenticados acessem as áreas restritas.

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
## 🚀 Rodando o Projeto Localment

Siga os passos abaixo para configurar e executar o ambiente de desenvolvimento.

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão 18.13 ou superior)
* [Angular CLI](https://angular.dev/tools/cli) (versão 19 ou superior)
* [JDK](https://www.oracle.com/br/java/technologies/downloads) (Versão 23 ou superior)

### 1. Clone o Repositório
```bash
git clone [https://github.com/adriannparanhos/CRM-Demo.git](https://github.com/adriannparanhos/CRM-Demo.git)
cd crm-demo
