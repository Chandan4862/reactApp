import React from "react";
import { useCounterStore } from "../../../store";

const Child1 = () => {
  const { setQuestion, question } = useCounterStore((state) => ({
    setQuestion: state.setQuestion,
    question: state.question
  }));

  const handleChange = (e) => {
    setQuestion({
      value: e.target.value
    });
  };
  return (
    <div>
      <label>Answer</label>
      <input type="text" value={question.value} onChange={handleChange} />
    </div>
  );
};

export default Child1;
