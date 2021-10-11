import React from "react";

const RenderButtons = ({ clickHandler,name}) => {
const names = Object.keys(name)
  return (
    <>
    <ul>
   { names.map((i)=>   
    <li key={i}>
      <button
        type="button"
        onClick={() => {
          clickHandler(i);
        }}
      >
        {i}
      </button>
    </li>
  )}
  </ul>
  </>
  );
};

export default RenderButtons;

