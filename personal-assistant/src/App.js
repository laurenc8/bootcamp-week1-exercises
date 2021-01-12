import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';
import AddTodoBar from './components/AddTodoBar';
import { Title } from './styles';
import { nanoid } from 'nanoid';

const App = () => {
  const [todos, setTodos] = useState([{id: 1, text: 'a'}, {id: 2, text: 'b'}, {id: 3, text: 'c'}]);
  function addTodos() {
    setTodos(todos.concat({id: nanoid(), text: 'f'}));
  }
  function deleteTodos(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  return (
    <div>
      <Title>Todo List</Title>
      <SearchBar />
      <TodoList todos={todos} deleteTodos={deleteTodos}/>
      <AddTodoBar addTodos={addTodos}/>
    </div>
  );
}

export default App;