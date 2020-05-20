import React, { useState , useEffect} from 'react';
import './App.css';
import Todo from "./Todo";
import db from "./firebase";

function App() {
    //we need a list of todo's
  //useState[params, funcyion]        init params
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  useEffect(()=>{
    console.log('fdgfdg');

    db.collection("todos").onSnapshot(snapshot =>{
     
      setTodos(snapshot.docs.map(doc => doc.data().title))});
  },[]);

  //delete todo function
  const deleteTodo = (e) => {
    e.preventDefault();
    let index = e.target.value;
    //only delete 1 element
    todos.splice(index, 1);
    setTodos([...todos]);
  }


  const handleSubmit = (e) => {

    //prevent refresh
    e.preventDefault();
    //[],'walk the dog'
    //['walk the dog']
    //put input at the end of todos =>[...todos,]
    // setTodos([input, ...todos]);
    
    db.collection("todos").add({
      title:input,
    })
    //clear input
    setInput("");
  }

  /* form allow to submitt sth */
  return (
    <div className="app">
      <div className="notepad">
        <div className="lines"></div>
        <div className="header">
          <h1>What do I need to do?</h1>
          <form className="todo-input">
            <input
              className="input-box"
              value={input}
              onChange={e => setInput(e.target.value)}
              type="text"
            />
            <button className="submit-btn" disabled={!input} type="submit" onClick={handleSubmit}>
              + Add
          </button>
          </form>
        </div>

        {todos.map((todo, index) => (
          <Todo
            key={index}
            value={index}
            title={todo}
            deleteTodo={deleteTodo}
          />
        ))}

      </div>
    </div>
  );
}

export default App;
