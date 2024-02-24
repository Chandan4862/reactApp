import React, { useEffect } from "react";
import { useCounterStore } from "../store";

const IncrementCounter = () => {
  const { IncrementCounter } = useCounterStore((state) => ({
    IncrementCounter: state.incrementCount
  }));
  useEffect(() => {
    console.log("rerender Inc");
  }, []);
  return (
    <div>
      <button onClick={IncrementCounter}>Increment Count</button>
    </div>
  );
};

export default IncrementCounter;
