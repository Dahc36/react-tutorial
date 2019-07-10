import React, { Component } from 'react';

import ToDoForm from 'components/ToDo/Form';
import ToDoList from 'components/ToDo/List';

class ToDo extends Component {
  state = {
    list: [],
  }

  handleSubmit = inputValue => {
    const list = [ ...this.state.list ];
    list.push(inputValue);
    this.setState(_ => ({ list }));
  }

  render () {
    return (
      <div>
        <h2>To Do</h2>
        <ToDoForm
          label="Add"
          onSubmit={this.handleSubmit}
        />
        <ToDoList list={this.state.list} />
      </div>
    );
  }
};

export default ToDo;
