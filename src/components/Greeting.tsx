import { useState } from "preact/hooks";
interface PropsGreeting {
  messages: string[];
}
export default function Greeting({ messages }: PropsGreeting) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

    const [greeting, setGreeting]=useState<string>(messages[0]);
    console.log(greeting)

  return (
    <div>
      <h3>{greeting} ¡Gracias por tu visita!</h3>
      <button onClick={() => setGreeting(randomMessage())}>Nuevo saludo</button>
    </div>
  );
}
