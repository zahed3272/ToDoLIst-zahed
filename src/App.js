// import React from 'react'

// const App = () => {
//     return (
//         <div className="todo-app">
//           <h1>todolist</h1>  
//         </div>
//     )
// }

// export default App
  
import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoFrom from './components/TodoForm'

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default App;
