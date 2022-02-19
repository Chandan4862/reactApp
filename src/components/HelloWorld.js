import React, { useState } from "react";

const HelloWorld = () => {
  const [status, setStatus] = useState(null);
  let timer = null;
  const handleChange = () => {
    window.clearTimeout(timer);
    setStatus("typing...");
  };

  const stop = () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => setStatus(null), 500);
  };

  return (
    <div>
      <input type="text" onKeyPress={handleChange} onKeyUp={stop} />
      {status ? <p>{status}</p> : null}
    </div>
  );
};

export default HelloWorld;
