import React, { useState } from 'react'

export const FunctionalComponent = () => {
    const [name,setName] = useState("Manan")
  return (
    <>
    <div>FunctionalComponent</div>
    <h3>My function  Component -- {name}</h3>
    <button onClick={()=>setName("Test")}>SetName</button>
    </>
  )

}
