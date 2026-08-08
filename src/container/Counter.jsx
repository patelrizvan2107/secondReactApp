import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  console.log(props);
  
  const inc = () => {
    console.log("hiii");
    setCount(count + 1);
  };

  const dec = () => {
    if (count < 1) {
      alert("enough ok");
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <button onClick={() =>setCount((count) => count - 1)} disabled={count===0}>-</button>
      {count}
      <button onClick={() => inc()} disabled={count === 5 }>+</button>
    </div>
  );
}

export default Counter;
