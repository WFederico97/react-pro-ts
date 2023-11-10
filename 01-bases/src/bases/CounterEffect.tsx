import { useEffect, useState } from "react";

const MAX_COUNT = 10

const CounterEffect = () => {
  const [counter, setCounter] = useState(5);

  const handleClick = () => {
    setCounter(prev => Math.min(prev +1 , MAX_COUNT));
  };

  useEffect(()=>{
    
  },[])

  return (
    <>
      <h1>CounterEffect: {counter}</h1>
      <button  onClick={handleClick}>+1</button>
    </>
  );
};

export default CounterEffect;
