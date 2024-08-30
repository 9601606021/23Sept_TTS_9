import React from 'react'

  const custom = {
    color:"red"
  }
 const Seconds = (props) => {
    const listData = props.myarray.map((i,index)=>{
                  return <li key={index}>{i}</li>
    })
  return (
    <>
    <hr></hr>
    <div>Seconds</div>
    <h3>My Second Component</h3>
    <h4>My Name is : {props.myName} <br></br> Id is : {props.id}</h4>
    <ul style={custom}>
      {listData}
    </ul>
    </>
  )
}

export default Seconds;