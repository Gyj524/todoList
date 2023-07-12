import React from 'react';
import MakeTodo from './todo/TodoInput';
import ShowTodo from './todo/TodoList';


function App(){

  return(
    <div id="root">
      <ShowTodo />
      <MakeTodo />
    </div>
  )
}

export default App;