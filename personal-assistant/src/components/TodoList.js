import React from 'react';
import { List } from '../styles';
import TodoArray from './TodoArray';

function TodoList() {
  const todos = TodoArray();
  const todoItems = todos.map((todo) =>
    <li key={todo.id}>
      <input type="checkbox" onChange=""/>
      {todo.text}
    </li>
  );
  return (
    <div>
      <List>{todoItems}</List>
    </div>
  );
}

export default TodoList;