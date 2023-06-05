import React, { useReducer } from "react";
import styleReducer from "../reducers/styleReducer";

const StyleButtons = ({ clothing, setDressCode }) => {
  const [style, dispatch] = useReducer(styleReducer, clothing);

  return (
    <div>
      <div>
        {/* <button onClick={() => dispatch({ type: "casual" })}>Casual</button>
        <button onClick={() => dispatch({ type: "sport" })}>Sport</button>
        <button onClick={() => dispatch({ type: "formal" })}>Formal</button> */}
        <button onClick={() => setDressCode("casual")}>Casual</button>
        <button onClick={() => setDressCode("sport")}>Sport</button>
        <button onClick={() => setDressCode("formal")}>Formal</button>
      </div>
    </div>
  );
};

export default StyleButtons;
