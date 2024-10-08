import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount(count+1);
    console.log("increasing..", count);
  }
  function decreaseCount(){
    setCount(count-1);
    console.log("decreasing..", count);
  }
  function resetCount(){
    setCount(0);


  }
  return (
    <div>
      I am writing a code. and count is {count}
      <br/>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
      <button onClick={resetCount}>reset</button>

    </div>

  );
 
 
 

  
}

export default App;
