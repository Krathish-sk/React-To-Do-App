import React, { useRef } from "react";

function ReactUseRef() {
  const inputRef = useRef(null);
  let text;
  const handleSubmit = () => {
    inputRef.current.focus();
    text = inputRef.current.value;
    // inputRef.current.value = "";
    console.log(text);
  };

  return (
    <div className="mainClass">
      <h2 style={{ color: "#fff", padding: "20px" }}>To-Do</h2>
      <div className="dataRef">
        <input type="text" placeholder="Write something" ref={inputRef} />
        <button onClick={handleSubmit} type="button">
          Add Task
        </button>
        <p style={{ color: "#fff" }}>{text}</p>
      </div>
    </div>
  );
}

export default ReactUseRef;
