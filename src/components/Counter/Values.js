import React from 'react';

const Values = function(props) {
  return (
    <div>
      <p>Value: {props.value} - Double: {props.value * 2} - Triple: {props.value * 3}</p>
    </div>
  );
};

export default Values;
