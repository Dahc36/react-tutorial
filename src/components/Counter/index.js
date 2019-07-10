import React from 'react';

import CounterButtons from './Buttons';
import CounterValues from './Values';

const Counter = function(props) {
  return (
    <div
      style={{
        display: 'inline-block',
        textAlign: 'center',
        width: '50%',
      }}
    >
      <h2>{props.label}</h2>
      <CounterValues value={props.value} />
      <CounterButtons label={props.clickLabel} onClick={props.onClick} />
    </div>
  );
};

export default Counter;
