import { processMessage } from '../services/messageService.js';

export function sendMessage(req, res) {
  const { message } = req.body;

  const response = processMessage(message);

  res.json({ reply: response });
}
