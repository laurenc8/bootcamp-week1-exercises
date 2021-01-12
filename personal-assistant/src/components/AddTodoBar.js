import React from 'react';
import { AddTodo } from '../styles';

function AddTodoBar(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.addTodos();
  }
  return (
    <div>
      <AddTodo onSubmit={handleSubmit}>
        <input type="text" name="item" />
        <input type="submit" value="Add Todo" />
      </AddTodo>
    </div>
  );
}

export default AddTodoBar;