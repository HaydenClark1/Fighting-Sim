import { useState, useEffect } from "react";

function TypingEffect({ message, typed}) {
  const [typedMessage, setTypedMessage] = useState("");

  useEffect(() => {
    const messageArray = message.split("");
    const typingInterval = setInterval(() => {
      setTypedMessage((prev) => prev + messageArray.shift());
      if (messageArray.length === 0) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [message]);
  useEffect(() => {
    typed(typedMessage);
  }, [typedMessage, typed]);

  return(
    <>
    {typedMessage}
    </>
  );
}

export default TypingEffect;
