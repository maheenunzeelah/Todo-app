import { useState,useEffect } from 'react';
import {Todo} from './components/Todo';
import React  from 'react';
function App() {
  const [todos,setTodos]=useState([]);
  const [value,setValue]=useState({})
  const deleteTodo=(id)=>{
 const filteredTodos=todos.filter(todo=>{
  return todo.id!==id;
})
localStorage.setItem("list",JSON.stringify(filteredTodos));
setTodos(filteredTodos)
   
  }
  
  const add=  (todo)=>{

let concat_todos=[...todos,todo];
localStorage.setItem("list",JSON.stringify(todos));
setTodos(concat_todos)
setValue({...value,val:'',id:''})
  }


  return (
    <div className="App container mt-5">
      <div className='jumbotron d-flex justify-content-center  align-items-center'>
      <Todo todos={todos} deleteTodo={deleteTodo} value={value} setValue={setValue} add={add}/>
      </div>
    </div>
  );
}

export default App;


// todo.id=Math.random(); 
// let todos=[...this.state.todos,todo];
// localStorage.setItem("list",JSON.stringify(todos));
// this.setState({
//    todos:todos
  
// })

// let value=localStorage.getItem("list");
// value=JSON.parse(value);
// console.log(value);
// this.setState({
//   todos:value
// })

// const todos=this.state.todos.filter(todo=>{
//   return todo.id!==id;
// })
// localStorage.setItem("list",JSON.stringify(todos));
// this.setState({
//   todos
// })