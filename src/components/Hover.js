import React, { useState } from "react";
import withCounter from "./Hoc";

const Hover = ({ incrementCounter, counter, name }) => {
  return (
    <>
      <h1 onMouseOver={incrementCounter}>
        Hover {counter} times {name}
      </h1>
    </>
  );
};

export default withCounter(Hover);
