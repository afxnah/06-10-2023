import React from 'react'
import './Transferdata.css'
const Transferdata = (props) => {
  return (
    <div>
     <h1 className='aa'> WELCOME</h1>
     <p>
        
           User Name :&nbsp;{props.username}</p>
  <p>Password :&nbsp;{props.password}</p>
  <p>User Type :&nbsp;{props.usertype}</p>
        
     
    </div>
  )
}

export default Transferdata
