import React from "react"
import logo from './logo.svg';
import './App.css';

function App() {

  let [count,setCount] = React.useState(0); 
  const increase = () =>{
    setCount(count+1);
  }
  const decrease = () =>{
    setCount(count-1);
  }
  const double = () =>{
    setCount(count*2);
  }
  return (
    // {{count} % 2 === 0 ? style={{color : "green"}} : style={{color : "red"}}} 
    <div className="App"> 
   <h1 style={{color : "red"}} >Counter : {count}</h1>
   <button onClick={increase} >INCREASE BY 1</button>
   <button onClick={decrease} >DECREASE BY 1</button>
   <button onClick={double} >DOUBLE</button>
   </div>
  );
}

export default App;
