import React from 'react';

const ToDoList = function(props) {
  const renderList = function(list) {
    return list.map((item, index) => (
      <li key={index} >{item}</li>
    ));
  }

  return (
    <ul>
      {renderList(props.list)}
    </ul>
  );
};

export default ToDoList;
