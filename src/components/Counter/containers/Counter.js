import React, { Component } from 'react';

import PresentationCounter from 'components/Counter';

class ContainerCounter extends Component {
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
      <PresentationCounter
        clickLabel="Add one"
        label="Counter"
        onClick={this.handleClick}
        value={this.state.value}
      />
    );
  }
};

export default ContainerCounter;
