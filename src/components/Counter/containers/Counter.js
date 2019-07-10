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
        value={this.state.value}
        label="Counter"
        clickLabel="Add one"
        onClick={this.handleClick}
      />
    );
  }
};

export default ContainerCounter;
