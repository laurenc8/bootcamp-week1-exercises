import React from 'react';
import SearchBar from './components/SearchBar';
import TodoArray from './components/TodoArray';
import TodoList from './components/TodoList';
import AddTodoBar from './components/AddTodoBar';
import { Title } from './styles';

const App = () => (
  <div>
    <Title>Todo List</Title>
    <SearchBar />
    <TodoList />
    <AddTodoBar todos={TodoArray()}/>
  </div>
)

export default App;