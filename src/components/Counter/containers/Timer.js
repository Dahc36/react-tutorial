import React, { Component } from 'react';

import PresentationCounter from 'components/Counter';

class ContainerTimer extends Component {
  state = {
    timeout: null,
    timerStarted: false,
    value: 0,
  }

  handleClick = _ => {
    if (this.state.timerStarted) {
      clearInterval(this.state.timeout);
      this.setState(_ => ({
        timeout: null,
        timerStarted: false,
      }));
    } else {
      const timeout = setInterval(_ => {
        this.setState(state => ({
          value: state.value + 0.1,
        }));
      }, 100);
      this.setState(_ => ({
        timeout,
        timerStarted: true,
      }));
    }
  }

  render() {
    return (
      <PresentationCounter
        clickLabel={this.state.timerStarted ? 'STOP' : 'START'}
        label="Timer"
        onClick={this.handleClick}
        value={Math.round(this.state.value * 10) / 10}
      />
    );
  }
};

export default ContainerTimer;
