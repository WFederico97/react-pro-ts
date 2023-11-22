import { useReducer } from "react";
import { counterReducer } from "./state/CounterReducer";
import { CounterState } from "./interfaces/interfaces";
import { doIncrementBy, doReset } from "./actions/actions";




const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};





const CounterReducerComponent = () => {
  const [{ counter, changes }, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const onReset = () => {
    dispatch(doReset());
  };

  const increaseBy = (value: number)  => {
    dispatch(doIncrementBy(value))
  };

  return (
    <>
      <h1>Counter Reducer Segmentado: {counter}</h1>
      <button onClick={()=> increaseBy(1)}>+1</button>
      <button onClick={()=>increaseBy(20)}>+20</button>
      <button onClick={onReset}>Reset</button>
      <h4>Changes: {changes} </h4>
    </>
  );
};

export default CounterReducerComponent;
