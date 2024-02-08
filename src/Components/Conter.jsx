//  Import use state fron react
import { useState } from "react"
// create counter functional component
export function Counter(){
  // take counter anda counter-update state variable
  const[counter,upadteCounter]=useState(1)

  // create function for Incre
  ment
  const Increase = () => {
    let result = counter + 1
    upadteCounter(result)
  }
  // create function for Decrement
  const Decrease = () => {
    let result = counter - 1
    upadteCounter(result)
  }
  return (
  <>
  {/* create  h1 tag for counter value show */}
    <h1>{counter}</h1> 
    {/* crea 2 button for in crement and decrement */}
    <button onClick={Increase}>Increase</button>
    <button onClick={Decrease}>Decrease</button>
  </>
  )
}