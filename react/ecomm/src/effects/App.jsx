import React, { useEffect, useState } from 'react'
import Child from './Child';
export default function App() {
    // const [st, setSt] = useState(0);
    const [isChild, setIsChild] = useState(false)
    const [arr, setArr] = useState([]);
    useEffect(()=>{
        setArr([1,2,3,4,5,6,7])
    },[])

    function sampleCall(lll){
        console.log(lll)
    }
  
    return (
    <>
        {/* {st} */}
        {isChild && <Child />}
        <button onClick={()=> setIsChild(!isChild)}>Change</button>
        <ul>
            {arr.map((val, index)=>{
                <li key={index}>{val}</li>
            })}
        </ul>
    </>
  )
}

/* 
    onClick={handleClick1}
    onClick={()=>{handleClick2(10)}}

*/