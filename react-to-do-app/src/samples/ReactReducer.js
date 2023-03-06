import React, { useReducer } from "react";

function ReactReducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return {
          counter: state.counter + 1,
          add: (state.add = true),
          minus: (state.minus = false),
        };
      case "minus":
        return {
          counter: state.counter - 1,
          add: (state.add = false),
          minus: (state.minus = true),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    add: false,
    minus: false,
  });
  return (
    <div className="mainClass">
      <h1>{state.counter}</h1>
      <div className="buttons">
        <button
          type="button "
          onClick={() => {
            dispatch({ type: "add" });
          }}
        >
          Increment Number
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({
              type: "minus",
            });
          }}
        >
          Decrement Number
        </button>
      </div>
      <div className="text">
        {state.add && <p>Number Incremented</p>}
        {state.minus && <p>Number Decremneted</p>}
      </div>
    </div>
  );
}

export default ReactReducer;
