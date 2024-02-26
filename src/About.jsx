import { useReducer } from "react"
import { DECREMENT, INCREMENT, RESET, countReducer, intialCountState } from "./reducer/counter"

export default function About() {

  const [count, dispatch] = useReducer(countReducer, intialCountState)

  return <>
    <h2>Context API Kullanılmadı</h2>
    <h2>About Count ::: {count}</h2>
    <button onClick={() => dispatch(INCREMENT)}>Increase</button>
    <button onClick={() => dispatch(DECREMENT)}>Decrease</button>
    <button onClick={() => dispatch(RESET)}>Reset</button>
  </>
}