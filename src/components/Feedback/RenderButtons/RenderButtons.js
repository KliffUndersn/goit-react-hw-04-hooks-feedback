import React from "react";
import PropTypes from 'prop-types'

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

RenderButtons.propTypes={
  clickHandler:PropTypes.func.isRequired,
  name:PropTypes.object.isRequired,
}