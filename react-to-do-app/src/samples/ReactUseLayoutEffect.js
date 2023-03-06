import React, { useEffect, useLayoutEffect, useRef } from "react";

function ReactUseLayoutEffect() {
  const inputRef = useRef(null);
  const layoutRef = useRef(null);

  useLayoutEffect(() => {
    layoutRef.current.value = " Layout Ref";
    console.log("I'm Krathish K");
  }, []);

  useEffect(() => {
    inputRef.current.value = " Input Ref";
    console.log("Hello");
  }, []);
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value="Hello I'm Krathish K"
        placeholder="Enter something Fun !!"
      />
      <input
        ref={layoutRef}
        type="text"
        value="Hello I'm Krathish K"
        placeholder="Enter something Fun !!"
      />
    </div>
  );
}

export default ReactUseLayoutEffect;
