export type CounterAction =
  | { type: "increaseBy"; payload: number } //*A diferencia de la interface , esta no va a sufrir modificaciones , se estipulan los mismos datos
  | { type: "reset" };

  export const doReset = (): CounterAction => ({
    type: 'reset'
  }) 

  export const doIncrementBy = (value: number): CounterAction => ({
    type: 'increaseBy', payload: value
  })