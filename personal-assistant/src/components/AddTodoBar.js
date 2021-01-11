import React from 'react';
import { AddTodo } from '../styles';

function AddTodoBar(props) {
  return (
    <div>
      <AddTodo onSubmit={props.todos.push('f')}>
        <input type="text" name="item" />
        <input type="submit" value="Add Todo" />
      </AddTodo>
    </div>
  );
}

export default AddTodoBar;