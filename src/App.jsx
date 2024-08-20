import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByValue } from './reduxStore/counterSlice';



function App() {
  const ctx = useSelector( state => state.counter );
  const dispatch = useDispatch();

  console.log(ctx);

  return (
    <>
      <h1>React Redux count: {ctx.value}</h1>
      <button onClick={() => dispatch( increment() )  }>Increment</button>
      <button onClick={ () => dispatch(decrement() ) } >Decrement</button>
      <button onClick={ () => dispatch(incrementByValue(5) ) }>Increment by 5</button>
    </>
  )
}

export default App
