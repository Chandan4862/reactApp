import React, { useState } from "react";

const HelloWorld = () => {
  const filters = ["chandan", "ojha", "time", "imp"];
  const [search, setSearch] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
      <div
        className="list"
        style={{ display: "flex", gap: 10, listStyle: "none" }}
      >
        {filters
          .filter((x) => x.includes(search))
          .map((x) => (
            <div className="border">{x}</div>
          ))}
      </div>
    </div>
  );
};

export default HelloWorld;
