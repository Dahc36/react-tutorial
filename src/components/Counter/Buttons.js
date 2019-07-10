import React from 'react';

const Buttons = function(props) {
  return (
    <div>
      <button onClick={props.onClick} >{props.label}</button>
    </div>
  );
};

export default Buttons;
