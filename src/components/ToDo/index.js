import React, { Component } from 'react';

import ToDoForm from 'components/ToDo/Form';

class ToDo extends Component {
  state = {
    formValue: '',
  }

  handleSubmit = inputValue => {
    this.setState(_ => ({ formValue: inputValue }));
  }

  render () {
    return (
      <div>
        <h2>To Do</h2>
        <ToDoForm
          label="Add"
          onSubmit={this.handleSubmit}
        />
        <p>{this.state.formValue}</p>
      </div>
    );
  }
};

export default ToDo;
