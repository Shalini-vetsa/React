import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import FunctionComponent from './FunctionComponent'
import ClassComponent from './ClassComponent'
import Cards from './Cards'
import Cards2 from './Cards2'
import Fun from './Html_JS'
import Function from './Function_with_parameters'
function App() {
  // const [count, setCount] = useState(0)
  var card = [
    {
      "image" : viteLogo,
      "price" : 200,
      "brand" : 'Thub'
    },
    {
      "image" : viteLogo,
      "price" : 300,
      "brand" : 'Aditya'
    },
    {
      "image" : viteLogo,
      "price" : 400,
      "brand" : 'College'
    },
    {
      "image" : viteLogo,
      "price" : 400,
      "brand" : 'School'
    }
  ]
  var x = 2;
  var y = 3;
  return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    // <>
    // <FunctionComponent />
    // <ClassComponent />
    // </>
    // <Form />


    <>
      <div className="parent">
        {
          card.map(ele=>
            <Cards2  data={ele}/>
          )
        }
        <Cards />
      </div>
      <Fun />
      <Function  mydata={x} value={y}/>
    </>


  )
}

export default App
