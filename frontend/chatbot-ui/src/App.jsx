import { useState } from 'react';

export default function App() {
  const [messages, setMessages] = useState([]); // controlar o chat
  const [text, setText] = useState(''); // controlar o input

  async function handleSend() {
    if (text.trim() === '') return;

    const userMessage = {
      author: 'user',
      text: text,
    };
    setMessages((prev) => [...prev, userMessage]);
    setText('');

    const response = await fetch('http://localhost:3000/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();

    const botMessage = {
      author: 'bot',
      text: data.reply,
    };

    setMessages((prev) => [...prev, botMessage]);
  }

  return (
    <div>
      <h1>ChatBot</h1>

      <div>
        {messages.map((msg, index) => (
          <p key={index}>
            <strong> {msg.author}: </strong> {msg.text}
          </p>
        ))}
      </div>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite sua mensagem"
      />

      <button onClick={handleSend}>Enviar</button>
    </div>
  );
}
