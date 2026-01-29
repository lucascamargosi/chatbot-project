import { useRef, useEffect } from 'react';

export default function ChatInput({ text, setText, onSend, disabled }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!disabled) {
      inputRef.current?.focus();
    }
  }, [disabled]);

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      onSend();
    }
  }

  function handleClick() {
    onSend();
  }

  return (
    <div className="chat-input">
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Digite sua mensagem"
        disabled={disabled}
      />

      <button onClick={handleClick} disabled={disabled}>
        Enviar
      </button>
    </div>
  );
}
