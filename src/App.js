import React, {Component}  from 'react';
import './App.css';
import Todos from "./todos";
import Addtodo from './Addtodos';

class App extends Component {
 state={
   todos:[{id:1, content:'buy some milk'},
         {id:2, content:'buy some bread'}
        ]

 }
  addtodo=(todo)=>{
    todo.id=Math.random(); 
    let todos=[...this.state.todos,todo];
    localStorage.setItem("list",JSON.stringify(todos));
    this.setState({
       todos:todos
      
    })
   
  }
componentDidMount(){
  let value=localStorage.getItem("list");
  value=JSON.parse(value);
  console.log(value);
  this.setState({
    todos:value
  })
}

 deletetodo=(id)=>{
   const todos=this.state.todos.filter(todo=>{
     return todo.id!==id;
   })
   localStorage.setItem("list",JSON.stringify(todos));
   this.setState({
     todos
   })
 }
  render() {
    return (
      <div className="App container">
       <div className="jumbotron">
         <center><h1><b>Todos</b></h1></center>
         <hr />
        <Todos todo={this.state.todos} deletetodo={this.deletetodo}/>
        <Addtodo add={this.addtodo} />
       </div>
      </div> 
    );
  }
}

export default App;

