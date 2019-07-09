import React from 'react';

const Buttons = function(props) {
  return (
    <div>
      <button onClick={props.onClick} >Click Me!</button>
    </div>
  );
};

export default Buttons;
