import React, { useRef } from "react";
import { connect } from "react-redux";

const Form = ({ toggle, d_push }) => {
  let fn = useRef(null);
  let ln = useRef(null);
  let mobile = useRef(null);
  const onSave = (event) => {
    event.preventDefault();
    let obj = {
      fn: fn.current.value,
      ln: ln.current.value,
      mobile: mobile.current.value,
    };
    d_push(obj);
    toggle();
  };
  return (
    <>
      <div>
        <form onSubmit={onSave}>
          <input type="text" ref={fn} placeholder="First Name"></input>
          <input type="text" ref={ln} placeholder="Last Name"></input>
          <input type="text" ref={mobile} placeholder="Mobile"></input>
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    d_push: (data) => dispatch({ type: "ADD", payload: data }),
  };
};

export default connect(null, mapDispatchToProps)(Form);
