import React, { Component } from 'react';

class ToDoList extends Component {
  state = {
    checkList: ,
  }

  handleCheckboxChange = event => {
    const { target } = event;
    console.log(target.checked);
  }

  renderList = list => {
    return list.map((item, index) => (
      <li key={index} style={{ listStyleType: 'none' }} >
        <input type="checkbox" checked={} onChange={this.handleCheckboxChange} />
        {item}
      </li>
    ));
  }
  
  render() {
    return (
      <ul>
        {this.renderList(props.list)}
      </ul>
    );
  }
};

export default ToDoList;
