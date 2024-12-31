import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const [objProp, setObjProp] = useState({name: 'naman', age: 10});
  const [arr, setArr] = useState([1,2,3,4,5])

  return (
    <> {/* unnecarry div in you code */}
      <div className='' style={{backgroundColor: 'red'}}> 

      </div>
      <p></p>
      <Sample count = {count} objProp={objProp}/>
      {/* {Sample(count)} */}
      {
        arr.map((value, index)=>{
          return <h1 key={index}>{value}</h1>
        })
      }
    </>
  )
}
function Sample({count, objProp}){
  count = 100; //but never ever change the valye of the prop, you will land in a lot of trouble. 
  return <>
    <h1>this is a sample component {count}</h1>
    <span>Name: {objProp.name}</span>
    <span>Age: {objProp.age}</span>
  </>
}

export default App
