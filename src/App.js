import React, { useState } from 'react';
import './App.css';
import Display from './Display';
import Control from './Control';

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
    <div className='center'>
      <Display countL={count} />
      <Control increase={increaseCount}
               decrease={decreaseCount}
               reset={resetCount}

      
      />

      <br/>
      
</div>
  );
}

export default App;
