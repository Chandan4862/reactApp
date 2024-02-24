import React, { useEffect } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import { useCounterStore } from "../../store";

const Questionnarire = () => {
  const { question } = useCounterStore((state) => ({
    question: state.question
  }));
  useEffect(() => {
    console.log("rerender Parent", question);
  }, [question]);
  return (
    <div>
      <Child1 />
      <Child2 />
      <h1>{JSON.stringify(question)}</h1>
    </div>
  );
};
export default Questionnarire;
