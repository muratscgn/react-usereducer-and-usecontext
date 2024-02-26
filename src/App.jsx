import { useContext, useReducer, useState } from 'react'
import { DECREMENT, INCREMENT, RESET, countReducer, intialCountState } from './reducer/counter'
import About from './About'
import { SiteContext } from './context/SiteContext'
import ContextAboutPage from './ContextAboutPage'
import AddTodo from './AddTodo'

function App() {
  // const [count, dispatch] = useReducer(countReducer, intialCountState)

  const { counter: { state, dispatch } } = useContext(SiteContext)
  console.log(state)

  return (
    <>
      <AddTodo></AddTodo>
      <hr />
      <h2>Count ::: {state}</h2>
      <button onClick={() => dispatch(INCREMENT)}>Increase</button>
      <button onClick={() => dispatch(DECREMENT)}>Decrease</button>
      <button onClick={() => dispatch(RESET)}>Reset</button>
      <hr />
      <ContextAboutPage></ContextAboutPage>
      <hr />
      <About></About>
    </>
  )
}

export default App
