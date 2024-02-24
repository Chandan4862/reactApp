import React, { useEffect } from "react";
import { useCounterStore } from "../store";

const DecrementCounter = () => {
  const { decrementCount } = useCounterStore((state) => ({
    decrementCount: state.decrementCount
  }));
  useEffect(() => {
    console.log("rerender Dec");
  }, []);
  return (
    <div>
      <button onClick={decrementCount}>Decrement Count</button>
    </div>
  );
};

export default DecrementCounter;
