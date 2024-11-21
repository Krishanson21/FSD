import React, { useState } from 'react'

function Usestudentstate(){
    const[count , setCount] = useState(20);
    function doIncrease(){
      console.log("hi inside increment");
      setCount(count+1);
    }
    function doDecremet(){
      console.log("hi inside increment");
      setCount(count-1);
    }
  return (
    <div style = {{color : "red" , border:'2px solid red' , width:'300px' , height:'400px' , marginLeft:'40%%', backgroundColor : 'palegoldenrod' , color:'red' , fontSize:'100px',marginLeft:'400px'}}>{count}
    <div>
      <button id="bin" onClick={doIncrease} style={{backgroundColor : 'blue',padding:'2px',marginLeft:'100px'}}>Increase</button>
    </div>
    <div>
      <button id="bin" onClick={doDecremet} style={{backgroundColor : 'blue',padding:'2px',marginLeft:'100px'}}>Decremet</button>
    </div>
    </div>
  )
}
export default Usestudentstate;