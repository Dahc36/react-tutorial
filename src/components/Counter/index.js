import React from 'react';

import Buttons from './Buttons';
import Values from './Values';

const Counter = function() {
  let value = 1;

  const handleClick = _ => {
    value += 1;
    console.log(value);
  }

  return (
    <div>
      <h2>Counter</h2>
      <Values value={value} />
      <Buttons onClick={handleClick} />
    </div>
  );
};

export default Counter;
