import Counter from "./bases/Counter"
import CounterBy from "./bases/CounterBy"
import CounterEffect from "./bases/CounterEffect"
// import CounterReducerComponent from "./bases/CounterReducer"
import CounterHook from "./bases/CounterHook"
import CounterReducerComponent from "./counter-reducer/CounterReducer"

function App() {
  

  return (
    <>
      <h1>React with TS</h1>
      <hr />
      <Counter initialValue = {12} />
      <CounterBy/>
      <CounterEffect/>
      <CounterHook/>
      <CounterReducerComponent/>
    </>
  )
}

export default App
