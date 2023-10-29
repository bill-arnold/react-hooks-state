import React, { useState } from "react";

function DisplayMessage() {
  const [message, setMessage] = useState("Hello, React!");

  function updateMessage() {
    setMessage("New Message");
  }

  return (
    <div>
      <h2>DisplayMessage Component</h2>
      <p>{message}</p>
      <button onClick={updateMessage}>Update Message</button>
    </div>
  );
}

export default DisplayMessage;
