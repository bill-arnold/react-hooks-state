// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   return <button onClick={increment}>I have been clicked {count} times</button>;
// }

// export default Counter;

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <h2>Counter Component</h2>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default Counter;

