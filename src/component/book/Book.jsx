import React, { useState } from 'react'

const Book = () => {
    const[bo,setBo]=useState('');
    const[au,setAu]=useState('');
    const[pu,setPu]=useState('');
    const[er,setEr]=useState(false);

    const readbookname=(event) =>{
        event.preventDefault();
        console.log(event.target.value);
        setBo(event.target.value)
    }    
        const readauthorname=(event) =>{
            event.preventDefault();
            console.log(event.target.value);
            setAu(event.target.value)
        
        }
        const readpublisher=(event) =>{
            event.preventDefault();
            console.log(event.target.value);
            setPu(event.target.value)
        
        }
        const checkfilldata=(event) =>{
            event.preventDefault();
            if(bo.trim ()===''||au===''||pu==='') 
            {
             setEr(true);
             return;
            }
         else{
            const myobj={
                bookname:bo,
                auther:au,
                publisher:pu
            }
            fetch("https://sampledbcs-83379-default-rtdb.firebaseio.com/SampleDBCS.json",
            {
                method:"post",
                body:JSON.stringify(myobj),
                headers:{"content-Type":"application.json"
            }
        }
     )
         }
        }
       
     
  return (
    <div>
      <h1>Book details</h1>
      <form>
        Bookname:<input type='text' onChange={readbookname}></input><p/>
        Auther:<input type='text' onChange={readauthorname}/><p/>
        Publisher:<input type='text' onChange={readpublisher}/><p/>
        <button type='submit'onClick={checkfilldata}>Save</button>
        {er &&'Error ocured'}
      </form>
    </div>
  )
}

export default Book
