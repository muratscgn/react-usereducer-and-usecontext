import { useContext, useReducer } from "react"
import { DECREMENT, INCREMENT, RESET } from "./reducer/counter"
import { SiteContext } from "./context/SiteContext"

export default function ContextAboutPage() {
  const { counter: { state, dispatch } } = useContext(SiteContext)

  return <div>
    <h2>Context About Page : Context API Kullanildi..</h2>
    <h2>{state}</h2>
    <button onClick={() => dispatch(INCREMENT)}>Increase</button>
    <button onClick={() => dispatch(DECREMENT)}>Decrease</button>
    <button onClick={() => dispatch(RESET)}>Reste</button>
  </div>
}