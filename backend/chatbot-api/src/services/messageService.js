// logica do chatbot
export function processMessage(message) {
  if (!message || message.trim() === '') {
    return 'Mensagem vazia não é permitida';
  }
  return `Você disse: ${message}`;
}
