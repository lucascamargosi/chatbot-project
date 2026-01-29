import { useState, useRef, useEffect } from 'react';

export default function App() {
  const [messages, setMessages] = useState([]); // controlar o chat
  const [text, setText] = useState(''); // controlar o input
  const [isTyping, setIsTyping] = useState(false);

  const messageEndRef = useRef(null); // referencia para o fim do chat
  const inputRef = useRef(null);

  function scrollToBottom() {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
      inputRef.current?.focus();
    }
  }

  return (
    <div className="chat-wrapper">
      <h1>ChatBot</h1>

      <div className="chat-box">
        <div className="chat-container">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}

          {isTyping && <div className="message bot typing">Digitando...</div>}

          <div ref={messageEndRef} />
        </div>

        <div className="chat-input">
          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Digite sua mensagem"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSend();
                setText('');
                inputRef.current?.focus();
              }
            }}
          />

          <button onClick={handleSend} disabled={isTyping}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
