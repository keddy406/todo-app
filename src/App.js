import React, { useState } from 'react';
import './App.css';
import Todo from "./Todo";

function App() {
  //delete todo function
  function deleteTodo(e) {
    e.preventDefault();
    let index = e.target.value;
    //only delete 1 element
    todos.splice(index,1);
    setTodos([...todos]);
  }
//we need a list of todo's
//useState[params, funcyion]        init params
  const [todos, setTodos] = useState([]); 
  const [input, setInput] = useState('');
  const handleSubmit = (e)=>{

    //prevent refresh
    e.preventDefault();
    //[],'walk the dog'
    //['walk the dog']
    //put input at the end of todos =>[...todos,]
    setTodos([input,...todos]);
    //clear input
    setInput("");
  }

   /* form allow to submitt sth */
  return (
    <div className="App">
      <div className="title">
        <h1>To-do APP</h1>  
      </div>
      
     <div className="todo-container">
        <div className="todo-bar">
          <form>
          <input value={input}
            onChange={e =>setInput(e.target.value)}
              type="text"
          />
        
          <button disabled={!input} type="submit"
            onClick={handleSubmit}>
              Add todo
          </button>
          </form>
          </div>
      <div className="todo-content">
        {todos.map((todo, index)=>(
          <Todo

            key = {index}
            value={index}
            title={todo}
            deleteTodo={deleteTodo}
           />
        ))}

      
       </div>
      
     </div>
      
      
     
    </div>
  );
}

export default App;
