import React, { useReducer } from "react";

function TryandError() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
          count: state.count + 1,
          showTextIncrease: (state.showTextIncrease = true),
          showTextDecrease: (state.showTextDecrease = false),
        };

      case "decreament": {
        return {
          count: state.count - 1,
          showTextIncrease: (state.showTextIncrease = false),
          showTextDecrease: (state.showTextDecrease = true),
        };
      }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showTextIncrease: false,
    showTextDecrease: false,
  });

  return (
    <div className="TryandErrorTheme">
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch({ type: "decreament" });
        }}
      >
        Decrement
      </button>
      <br />
      <br />
      {state.showTextIncrease && <p>Incrementation done</p>}
      {state.showTextDecrease && <p> Decrementation done </p>}
    </div>
  );
}

export default TryandError;
