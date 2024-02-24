import React from "react";
import { useCounterStore } from "../../../store";

const Child1 = () => {
  const { setQuestion, question } = useCounterStore((state) => ({
    setQuestion: state.setQuestion,
    question: state.question
  }));

  const handleChange = (e) => {
    setQuestion({
      comment: e.target.value
    });
  };
  return (
    <div>
      <label>Comment</label>
      <input type="text" value={question.comment} onChange={handleChange} />
    </div>
  );
};

export default Child1;
