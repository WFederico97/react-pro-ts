import { useState } from "react";

const Counter = ({initialValue = 0}) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + initialValue);
  };
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default Counter;
