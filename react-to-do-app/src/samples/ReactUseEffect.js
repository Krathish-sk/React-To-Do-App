import React, { useEffect, useState } from "react";
import axios from "axios";

function ReactUseEffect() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[count].email);
      });
  }, [count]);
  return (
    <div style={{ color: "white", padding: "20px" }}>
      Hello
      <br />
      <br />
      <p>
        Emai; : <b>{data}</b>
      </p>
      <h2 style={{ padding: "20px" }}>{count}</h2>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default ReactUseEffect;
