import React, { Component } from 'react';

class ToDo extends Component {
  state = {
    inputValue: 'ejemplo',
    formValue: '',
  }

  handleInputChange = event => {
    const { target } = event;
    this.setState(_ => ({ inputValue: target.value }));
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(_ => ({ formValue: this.state.inputValue }));
  }

  render () {
    return (
      <div>
        <h2>To Do</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange} />
          <button>Add</button>
        </form>
        <p>{this.state.formValue}</p>
      </div>
    );
  }
};

export default ToDo;
