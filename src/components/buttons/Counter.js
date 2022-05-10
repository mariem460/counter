import { useState } from 'react';
import './Counter.css';
function Counter() {
    const [count, setCount] = useState(0)
    const decrement = () => {
        setCount(count - 1)
    }
    const increment = () => {
        setCount(count + 1)
    }

    return (
      <div>
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
        <h3>Counter</h3>
      </div>
    );
  }
  export default Counter;