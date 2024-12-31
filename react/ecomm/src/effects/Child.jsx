import { useEffect } from "react";
import { useState } from "react";
function Child() {
  const [counter, setCounter] = useState(10);
//   useEffect(() => {
//     if (counter <= 0) {
//       return;
//     }
//     const timef = setTimeout(() => {
//         setCounter((prev) => prev - 1);
//     }, 1000);

//     return () => {
//       clearTimeout(timef);
//     };
//   }, [counter]);

useEffect(() => {
    //ref -> 
    // if (counter <= 0) {
    //   return;
    // }
    const timef = setInterval(() => {
        console.log('called')
        setCounter((prev) =>{
            if(prev == 0){}
            else{

                return prev - 1
            }
        });
    }, 1000);

    return () => {
      clearInterval(timef);
    };
  }, []);
//   console.log(timer / 1000);
  return (
    <div>
      <h1 className="">{counter}</h1>
    </div>
  );
}
export default Child;
