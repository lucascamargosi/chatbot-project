import { useEffect, useRef } from 'react';

export default function ChatWindow({ messages, isTyping }) {
  const messageEndRef = useRef(null); // referência para auto-scroll

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="chat-container">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.sender}`}>
          {message.text}
        </div>
      ))}

      {isTyping && <div className="message bot typing">Digitando...</div>}
      <div ref={messageEndRef} />
    </div>
  );
}
