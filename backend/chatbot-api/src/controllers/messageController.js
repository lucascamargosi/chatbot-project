import { processMessage } from '../services/messageService.js';

export function sendMessage(req, res) {
  const { text } = req.body; // desestruturacao / extrai o valor de text (propriedade 'body' em app.jsx)

  const response = processMessage(text); // armazena a resposta do bot na variável 

  res.json({ reply: response });
}
