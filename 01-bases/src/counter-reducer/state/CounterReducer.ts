import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const counterReducer = (
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