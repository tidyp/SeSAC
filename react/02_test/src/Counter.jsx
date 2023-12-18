import React from "react"; // eslint-disable-line no-unused-vars
import { useState } from "react";

import CounterResult from './CounterResult'

const Counter = (props) => {
  const [count, setcount] = useState(props.obj.num);

  const onIncrease = () => {
    console.log("click in");
    setcount(count + 1);
  };
  const onDecrease = () => {
    console.log("click de");
    setcount(count - 1);
  };

  return (
    <>
      <h1>{props.obj.title}</h1>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <CounterResult count={count}/>
    </>
  );
};

export default Counter;
