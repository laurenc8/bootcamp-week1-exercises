import React from 'react';
import { AddTodo } from '../styles';

function AddTodoBar(props) {
  function handleSubmit(event) {
    event.preventDefault();
    let formdata = new FormData(event.target);
    props.addTodos(formdata.getAll("item")[0]);
    event.target.reset();
  }
  return (
    <div>
      <AddTodo onSubmit={handleSubmit}>
        <input type="text" name="item" />
        <input type="submit" value="add todo" />
      </AddTodo>
    </div>
  );
}

export default AddTodoBar;