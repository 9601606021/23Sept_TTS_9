import React, { useState } from 'react'

export const FunctionalComponetwithCount = () => {
    const [count,setCount]= useState(0)
  return (
    <>
    <div>FunctionalComponetwithCount</div>
    <h3>My functinal Component Count -- {count} </h3>
    <button onClick={()=>setCount(count+1)}>Add</button>
    </>
  )
  
}
