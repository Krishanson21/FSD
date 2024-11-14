import React from 'react'
import Student from './Student';
function App() {
  const h1=<h1>Hello World</h1>
  const mystyle={
    color:'red',
    backgroundColor:'yellow'
  }
  return (
    <div style={{backgroundColor:'orange'}}> 
      {h1}
      <div style={mystyle}> ABES Engineering College</div>
      <div>
        <Student college="ABES Engineering College" 
        name="Prince"
        pic={<img src='https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg' height={100} width={100}></img>}
        branch="CSE"
        section="B"
        roll="12"
         />

      <Student college="ABES Engineering College" 
        name="Rahul"
        pic={<img src='https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg' height={100} width={100}></img>}
        branch="CSE"
        section="C"
        roll="12"
         />
        
        <Student college="ABES Engineering College" 
        name="Rohit"
        pic={<img src='https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg' height={100} width={100}></img>}
        branch="CS-DS"
        section="N"
        roll="12"
         />
      </div>
    </div>
  )
}

export default App