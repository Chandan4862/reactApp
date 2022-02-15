import React, { useState } from "react";
import withCounter from "./Hoc";

const Counter = ({ incrementCounter, counter }) => {
  return (
    <>
      <button onClick={incrementCounter}> Clicked {counter} times</button>
    </>
  );
};

export default withCounter(Counter);
