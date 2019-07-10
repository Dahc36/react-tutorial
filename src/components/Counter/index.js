import React from 'react';

import Buttons from './Buttons';
import Values from './Values';

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
      <Values value={props.value} />
      <Buttons label={props.clickLabel} onClick={props.onClick} />
    </div>
  );
};

export default Counter;
