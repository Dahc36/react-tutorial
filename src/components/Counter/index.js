import React from 'react';

import Values from './Values';

const Counter = function() {
  let value = 1;

  return (
    <div>
      <h2>Counter</h2>
      <Values value={value} />
    </div>
  );
};

export default Counter;
