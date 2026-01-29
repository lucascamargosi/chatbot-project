# Chatbot Project

Projeto fullstack de um chatbot demonstrativo que implementa uma arquitetura cliente-servidor com interface interativa. Permite explorar conceitos de comunicação API REST, gerenciamento de estado em React com componentes reutilizáveis e processamento de requisições no backend.

## Objetivo

Este projeto é um **chatbot demonstrativo** que ilustra a arquitetura cliente-servidor.
Fornece uma base para:

- Explorar React com componentes reutilizáveis
- Implementar API REST com Express
- Expandir com lógica de IA ou processamento de linguagem natural

## Tecnologias

**Frontend:**

- React 18
- Vite
- CSS3

**Backend:**

- Node.js
- Express
- CORS

**Comunicação:**

- API REST

## Arquitetura Frontend

O frontend foi refatorado em componentes reutilizáveis:

```
src/
├── App.jsx              (Componente principal, gerencia estado e lógica)
├── components/
│   ├── ChatWindow.jsx   (Exibe mensagens e auto-scroll)
│   └── ChatInput.jsx    (Input, botão e auto-focus)
├── index.css            (Estilos globais)
└── main.jsx
```

## Fluxo da Aplicação

1. Usuário digita mensagem no `ChatInput`
2. Ao clicar "Enviar" ou pressionar Enter, `App.jsx` envia POST para a API
3. Backend processa e responde com a resposta do bot
4. `ChatWindow` renderiza a mensagem e faz scroll automático
5. Auto-focus volta para o input após a resposta

## Como Rodar

### Pré-requisitos

- Node.js instalado
- Git instalado

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/chatbot-project.git
cd chatbot-project
```

### Backend

```bash
cd backend/chatbot-api
npm install
npm run dev
```

A API rodará em `http://localhost:3000`

### Frontend

```bash
cd frontend/chatbot-ui
npm install
npm run dev
```

A aplicação rodará em `http://localhost:5173`

## Recursos

- ✅ Chat em tempo real
- ✅ Auto-scroll para novas mensagens
- ✅ Auto-focus no input após envio
- ✅ Indicador de digitação do bot
- ✅ Componentes reutilizáveis
- ✅ Interface responsiva e centrada
- ✅ Tratamento de erros

## Notas

- Certifique-se de que o backend está rodando antes de iniciar o frontend
- O projeto usa CORS para permitir requisições entre domínios
