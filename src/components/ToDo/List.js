import React, { Component } from 'react';

class ToDoList extends Component {
  state = {
    checkList: {},
  }

  handleCheckboxChange = index => event => {
    const { target } = event;
    this.setState(state => ({
      checkList: {
        ...state.checkList,
        [index]: target.checked,
      },
    }));
  }

  renderList = list => {
    return list.map((item, index) => {
      const checked = this.state.checkList[index] ? true : false;
      return (
        <li key={index} style={{ listStyleType: 'none' }} >
          <input id={`check-input-${index}`} type="checkbox" checked={checked} onChange={this.handleCheckboxChange(index)} />
          <label
            htmlFor={`check-input-${index}`}
            style={{ textDecorationLine: checked ? 'line-through' : 'none' }}
          >
            {item}
          </label>
        </li>
      );
    });
  }
  
  render() {
    return (
      <ul>
        {this.renderList(this.props.list)}
      </ul>
    );
  }
};

export default ToDoList;
