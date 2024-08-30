const FirstComponents = () =>{
    const b = "b"
    const myCustomStyle = {
        backgroundColor:"yellow",
        color:"blue"
    }
    const cube = (b)=> {
        // let b=5
        console.log('cube func calling..'+(b*b*b));
        
    }
    return(
        <div>
            <h3 style={{color:"red"}}>My First Components Created</h3>
            <h4>B is - {b}</h4>
            <h4 style={myCustomStyle}>Add is - {10+20}</h4>
            <h4>Cube is </h4>

            <button onClick={()=>cube(6)}>Cube</button>
        </div>
        
    )
}

export default FirstComponents