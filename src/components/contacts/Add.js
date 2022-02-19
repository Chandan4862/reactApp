import React, { useState } from "react";
import Form from "./Form";

const Add = () => {
  const [showForm, setShowForm] = useState(false);
  const toggle = () => {
    setShowForm((prevState) => !prevState);
  };
  return (
    <>
      <div>
        {!showForm ? (
          <button onClick={toggle}>Add Contact</button>
        ) : (
          <Form toggle={toggle}></Form>
        )}
      </div>
    </>
  );
};

export default Add;
