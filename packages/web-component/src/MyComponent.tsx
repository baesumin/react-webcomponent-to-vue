// packages/ui/src/MyComponent.tsx
import { useState } from "react";

interface MyComponentProps {
  name: string;
}

export default function MyComponent({ name }: MyComponentProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const event = new CustomEvent("chat-message", {
      detail: {
        from: name,
        message: message,
      },
    });
    window.dispatchEvent(event); // WebComponent 외부로 이벤트 발사
    setMessage(""); // 입력창 비우기
  };

  return (
    <div style={{ padding: 20, backgroundColor: "#f0f0f0", borderRadius: 8 }}>
      <h2>Hello, {name}!</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
        style={{ marginRight: 8 }}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
