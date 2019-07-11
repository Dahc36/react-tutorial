import React, { Component } from 'react';

class ToDoForm extends Component {
  state = {
    inputValue: '',
  }

  handleInputChange = event => {
    const { target } = event;
    this.setState(_ => ({ inputValue: target.value }));
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState(_ => ({ inputValue: '' }));
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange} />
        <button disabled={this.props.disabled} >{this.props.label}</button>
      </form>
    );
  }
};

export default ToDoForm;
