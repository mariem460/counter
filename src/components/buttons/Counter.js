import { useState } from 'react';
import './Counter.css';
import PropTypes from "prop-types";

function Counter({backgroundColor = "green", size = "md"}) {
  let scale = 1 ;
  if (size === "sm") scale = 0.75
  if (size === "lg") scale = 1.5
  
  const style  = {
    backgroundColor,
    border : "radius",
    padding: `${scale * 0.5}rem ${scale * 1}rem`
  }
    const [count, setCount] = useState(0)
    const decrement = () => {
        setCount(count - 1)
    }
    const increment = () => {
        setCount(count + 1)
    }

    return (
      <div>
        <button onClick={decrement} style ={style}>-</button>
        {count}
        <button onClick={increment} style ={style}>+</button>
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