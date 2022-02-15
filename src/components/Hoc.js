import React, { useState } from "react";

const withCounter = (WrappedComponent) => {
  const NewComponent = (props) => {
    const [counter, setCounter] = useState(0);
    let incrementCounter = () => {
      setCounter((preState) => preState + 1);
    };
    console.log(props);
    return (
      <>
        <WrappedComponent
          incrementCounter={incrementCounter}
          counter={counter}
          {...props}
        ></WrappedComponent>
      </>
    );
  };

  return NewComponent;
};

export default withCounter;
