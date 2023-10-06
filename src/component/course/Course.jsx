import React, { useState } from 'react'

const Course = () => {

    const [cn,setCn]=useState('');
    const [dn,setDn]=useState('');
    const [fa,setFa]=useState('');
    

    const readcoursename=(event) =>{
        console.log(event.target.value);
        setCn(event.target.value);
    }
        const readduration=(event) =>{
            console.log(event.target.value);
            setDn(event.target.value);
    }
    const readfeeamount=(event) =>{
        console.log(event.target.value);
        setFa(event.target.value);
}
    
  return (
    <div>
      <form>
      coursename:<input type='text' onChange={readcoursename}></input><p/>
        duration:<input type='number'onChange={readduration}/><p/>
        feeAmount<input type='number' onChange={readfeeamount}></input>
        <button type='submit'>LOGIN</button>
      </form>
    </div>
  )
}

export default Course
