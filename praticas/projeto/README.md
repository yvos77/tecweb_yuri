# 📚 Estante Digital (React)

Aplicação web para gerenciar uma biblioteca pessoal de livros. Conversão do
projeto original (HTML/CSS/JS) para **React**, com integração a uma **API REST
local** (json-server). Projeto da disciplina de **Tecnologia Web**.

## ✨ Funcionalidades

- Navegação entre 3 páginas (Início, Cadastro, Listagem) com **React Router**
- Formulário **controlado** com validação e mensagens de erro inline
- **Listagem dinâmica** com renderização múltipla e filtro por gênero
- **Estado compartilhado** entre páginas com **Context API**
- Integração com **API REST** (GET, POST e PUT via `fetch`)
- Marcar livros como lido / não lido
- Layout responsivo (menu hamburguer no mobile)

## 🛠️ Tecnologias

React · Vite · React Router DOM · Context API · Fetch · json-server

## 🚀 Como rodar localmente

Precisa apenas de **Node.js** instalado (não precisa de Docker).

```bash
npm install
npm run dev:all