import { useState } from 'react';
import './Counter.css';
import PropTypes from "prop-types";

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
  Counter.prototype = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    onClick: PropTypes.func
  }
  export default Counter;