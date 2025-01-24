import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  }; 

  const handleRemove = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Hello World</h1>
      <h1>Count value: {counter}</h1>
      <button onClick={handleAdd}>Add value</button>
      <br />
      <hr />
      <button onClick={handleRemove}>Remove value</button>
    </>
  );
}

export default App;