import { processMessage } from '../services/messageService.js';

export function sendMessage(req, res) {
  const { text } = req.body;

  const response = processMessage(text);

  res.json({ reply: response });
}
