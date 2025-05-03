// frontend/src/components/Chat.tsx
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

export default function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.on('newMessage', (msg: string) => {
      setMessages(prev => [...prev, msg]);
    });
  }, []);

  return (
    <div>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={() => socket.emit('sendMessage', message)}>
        Send
      </button>
      <div>
        {messages.map((msg, i) => <p key={i}>{msg}</p>)}
      </div>
    </div>
  );
}
