import React  from 'react';

const Todos=({todo,deletetodo})=>{
    const todoList=todo.length?(todo.map(todo=>{
        return(
        <div className="todos" key={todo.id}>
        <center>
        <div onClick={()=>deletetodo(todo.id)}>{todo.content}</div>
        </center>
        </div>
    )
})
    ): (<div>No todo left</div>)
    return(
     <div>{todoList}</div>
    );
} 
export default Todos;