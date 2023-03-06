import React, { useRef } from "react";
import ChildButton from "./ChildButton";

function ParentButton() {
  const buttonRef = useRef(null);
  return (
    <div
      className="mainParentChild"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        paddingTop: "10px",
      }}
    >
      <button
        style={{ width: "100px" }}
        type="button"
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Parent Button
      </button>
      <ChildButton ref={buttonRef} />
    </div>
  );
}

export default ParentButton;
