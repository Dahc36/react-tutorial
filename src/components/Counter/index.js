import React from 'react';

import Buttons from './Buttons';
import Values from './Values';

const Counter = function() {
  let value = 1;

  return (
    <div>
      <h2>Counter</h2>
      <Values value={value} />
      <Buttons />
    </div>
  );
};

export default Counter;
