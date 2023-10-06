import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [un,setUn]=useState('');
    const [pwd,setPwd]=useState('');
    const[error,setError]=useState(false);


    const readusername =(event) =>{
        event.preventDefault();
        console.log(event.target.value);
        setUn(event.target.value);
    }
        const readpassword =(event) =>{
            event.preventDefault();
            console.log(event.target.value);
            setPwd(event.target.value);
    }
    const checkfilldata=(event) =>{
        event.preventDefault();
        if(un.trim ()===''||pwd==='')
        {
         setError(true);
         return;
        }
    }
  return (
    <div>
        <h1>SIGN IN</h1>
      <form>
        Username:<input type='text' onChange={readusername}></input><p/>
        Password:<input type='password'onChange={readpassword}/><p/>
        <button type='submit' onClick={checkfilldata}>LOGIN</button>
      </form>
      {error&&'error occured'}
    </div>
  )
}

export default Login
