import { useState,useEffect} from 'react';
import './App.css';

function App() {
  const localData = parseInt(localStorage.getItem("number")) || 1
  const[count,setCount] = useState(localData)
  let setClick = ()=>{
    setCount((prevCount)=>{
      let newCount = prevCount +1
      localStorage.setItem("number",newCount)
      return newCount
    })
  }
  // useEffect(()=>{
    
  // },[count])
  return (
    <div className="App">
     <h1>Vaibhav Sharma</h1>
     <p>{count}</p>
      <button onClick={setClick}>Click here</button>
    </div>
  );
}

export default App;
