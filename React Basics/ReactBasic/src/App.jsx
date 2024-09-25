import './App.css'
import Demo from './Demo'
import DemoProps from './DemoProps'
import CounterComponent from './CounterComponent'
import { useState, useEffect } from 'react'
function App() {

  const [data, setData] = useState([]);
  // rerednring process of infinite loop so we use useeffect

  useEffect(() => {
    async  function datafetch(){
      const response = await fetch("https://api.coincap.io/v2/assets")
      if(!response.ok)
      {
          throw new Error;
      }
      const datajson = await response.json()
      setData(datajson)
      console.log(datajson);
      datafetch();
  
  }

  },[])
//   async  function datafetch(){
//     const response = await fetch("https://api.coincap.io/v2/assets")
//     if(!response.ok)
//     {
//         throw new Error;
//     }
//     const datajson = await response.json()
//     setData(datajson)
//     console.log(datajson);

// }
// datafetch();





  return (
    <>
    <div>
        {/* <button onClick={datafetch}>fecth Data</button> */}
    </div>

     <h1>Hello Mr Pandey </h1>
     <Demo />
     <CounterComponent />
     <DemoProps name = {'Abhsihek Pandey'} company={'CedCommerce'}/>
    </>
  )
}

export default App
