import React from "react"
import { useState } from "react"
export function State1(){
const[name1,setName]=useState(0);
const Click=()=>{
    setName(name1+15);
}
return(
    <>
    <button onClick={Click}>Click</button>
    <p>{name1}</p>
    </>
)
}

// const[name1,setName]=useState({Namea1:"MANI",
//     agea:"25",
//     classa:"A"
// })
// const Click=()=>{
//     setName({Namea1:"HI"});
//     setName({agea:"27"});
//     setName({classa:"B"});
// }







// import React from 'react'
// import {State1} from './assets/state'
// function App(){
//   return(
//     <div>
//       <State1/>
//     </div>
//   )
// }
// export default App;