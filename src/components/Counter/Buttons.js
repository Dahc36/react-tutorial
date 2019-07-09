import React from 'react';

const Buttons = function(props) {
  const handleClick = event => {
    console.log('Clicked!');
  }

  return (
    <div>
      <button onClick={handleClick} >Click Me!</button>
    </div>
  );
};

export default Buttons;
