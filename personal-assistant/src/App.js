import React, { useReducer } from 'react';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';
import AddTodoBar from './components/AddTodoBar';
import { Title, Header } from './styles';
import { nanoid } from 'nanoid';

const App = () => {
  function reducer(state, action) {
    switch (action.type) {
      case 'add':
        return {todos: state.todos.concat(action.item), term: state.term};
      case 'delete':
        return {todos: state.todos.filter(todo => todo.id !== action.id), term: state.term};
      case 'search':
        return {todos: state.todos, term: action.term};
      default:
        return state;
    }
  }
  const [{todos, term}, dispatch] = useReducer(reducer, {todos: [], term: ""});
  function addTodos(item) {
    dispatch({type: 'add', item: {id: nanoid(), text: item}});
  }
  function deleteTodos(id) {
    dispatch({type: 'delete', id: id});
  }
  function searchTodos(item) {
    dispatch({type: 'search', term: item})
  }
  console.log(todos);
  return (
    <div>
      <Title>todos</Title>
      <SearchBar searchTodos={searchTodos}/>
      <Header>{todos.length} tasks remaining</Header>
      <center>{todos.length === 0 ? <h2>All Done!</h2> : null}</center>
      <TodoList todos={todos.filter(todo => todo.text.toLowerCase().includes(term.toLowerCase()))} deleteTodos={deleteTodos}/>
      <AddTodoBar addTodos={addTodos}/>
    </div>
  );
}

export default App;