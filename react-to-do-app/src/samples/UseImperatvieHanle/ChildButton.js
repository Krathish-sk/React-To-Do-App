import React, { useState, forwardRef, useImperativeHandle } from "react";

const ChildButton = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <div className="mainChildButton">
      <button
        type="button"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Child Button
      </button>
      <div style={{ paddingTop: "10px" }}>
        {toggle && <span style={{ color: "white" }}>Toggle</span>}
      </div>
    </div>
  );
});

export default ChildButton;
