import { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';

export default function App() {
  const [messages, setMessages] = useState([]); // controlar o chat
  const [text, setText] = useState(''); // controlar o input
  const [isTyping, setIsTyping] = useState(false);

  async function handleSend() {
    if (text.trim() === '') return;

    setMessages((prev) => [...prev, { text, sender: 'user' }]);
    setText('');
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:3000/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      setMessages((prev) => [...prev, { text: data.reply, sender: 'bot' }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { text: 'Erro ao conectar com o servidor.', sender: 'bot' },
      ]);
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <div className="chat-wrapper">
      <h1>ChatBot</h1>

      <div className="chat-box">
        <ChatWindow messages={messages} isTyping={isTyping} />

        <ChatInput
          text={text}
          setText={setText}
          onSend={handleSend}
          disabled={isTyping}
        />
      </div>
    </div>
  );
}
