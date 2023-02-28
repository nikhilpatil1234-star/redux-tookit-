import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc, incrementByAmount, reset } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <div>
      <h1> {count}</h1>
      <button onClick={() => dispatch(inc())}> increament</button>
      <button onClick={() => dispatch(dec())}>decrement</button>
      <button onClick={() => dispatch(reset())}> Reset</button>
      <>
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={() => dispatch(resetAll)}>Reset</button>
      </>
    </div>
  );
};

export default Counter;
