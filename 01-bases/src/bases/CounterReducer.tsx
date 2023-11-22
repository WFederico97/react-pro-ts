import { useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterAction =
  | { type: "increaseBy"; payload: number } //*A diferencia de la interface , esta no va a sufrir modificaciones , se estipulan los mismos datos
  | { type: "reset" };

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "increaseBy":
      return {
        changes: state.changes ++,
        counter: state.counter + action.payload,
        previous: state.counter,
      };
      break;

    case "reset":
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      };
      break;

    default:
      return state;
  }
};

const CounterReducerComponent = () => {
  const [{ counter, changes }, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const onReset = () => {
    dispatch({ type: "reset" });
  };

  const increaseBy = (value: number)  => {
    dispatch({type: "increaseBy", payload: value})
  };

  return (
    <>
      <h1>Counter Reducer: {counter}</h1>
      <button onClick={()=> increaseBy(1)}>+1</button>
      <button onClick={()=>increaseBy(20)}>+20</button>
      <button onClick={onReset}>Reset</button>
      <h4>Changes: {changes} </h4>
    </>
  );
};

export default CounterReducerComponent;
