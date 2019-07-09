import React, { Component } from 'react';

import Buttons from './Buttons';
import Values from './Values';

class Counter extends Component {
  state = {
    value: 1,
  }

  handleClick = _ => {
    this.setState(state => ({
      value: state.value + 1,
    }));
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <Values value={this.state.value} />
        <Buttons onClick={this.handleClick} />
      </div>
    );
  }
};

export default Counter;
