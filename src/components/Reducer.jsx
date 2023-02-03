

import React, { useReducer,useCallback } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "updateValue": {
      const newValue = action.payload;
      return newValue;
    }
    case "addition":
      return state + 1;
    case "subtraction":
      return state - 1;
    case "multiply":
      return state * 2;
    case "divide":
      return state / 2;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Reducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  //  const [state, setState] = useState("");
  //  const handleChangeOn = (e) => {
  //   setState(e.target.value)
  //  };
  
  const handleChangeOn = useCallback(
    (event) => {
      const value = parseInt(event.target.value, 1) || initialState;
      dispatch({ type: "updateValue", payload: value });
    },
    [dispatch]
  );

  return (
    <div>
      <input value={count}
       onChange={handleChangeOn} 
      //  onChange={handleChange}
       />
 <div id="numbers">Counter {count} - 0</div>
      <button onClick={() => dispatch({ type: "addition" })}>
        Addition +
      </button>
      <button onClick={() => dispatch({ type: "subtraction" })}>
        Subtraction -
      </button>


      <button onClick={() => dispatch({ type: "multiply" })}>
        Multiplication
      </button>
      <button onClick={() => dispatch({ type: "divide" })}>Division</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Reducer;
