import { TodoList } from './TodoList';
import React  from 'react';
export const Todo=({todos,add,deleteTodo,value,setValue})=>{
    const addtodo=(e)=>{
        e.preventDefault();
        if(value.val!="")
         add(value);
       
         
    }

    const onChange=(e)=>{
      const id=Math.floor(Math.random()*10)
     
       setValue({...value,id:id,val:e.target.value})
    }
 return <div className='container'>
         <form  style={{fontFamily:"Segoe UI"}} className="form-inline d-flex justify-content-center mb-5" onSubmit={(e)=>addtodo(e)}>
           <div className="form-group mx-sm-3  " >
             <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
             placeholder="Add New todo" value={value.val}
             onChange={(e)=>onChange(e)}
            />
        
           </div>
           <button  type="submit" className='btn btn-secondary'>Enter</button>
         </form>
      <div>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
      </div>
 </div>
}

// import React, {Component} from 'react';

// class Addtodo extends Component{
//     state={
//       content:''
//     }
// handleSubmit=(e)=>{
//     e.preventDefault();
//     this.props.add(this.state);
//     this.setState({
//         content:''
//     })
// }
// handleChange=(e)=>{
//     this.setState({
//         content:e.target.value
//     })
//     localStorage.setItem("new item",e.target.value)
// }
// render(){
//     return(
//     <div className="container">
//       <form onSubmit={this.handleSubmit}>
//        <div className="form-group" style={{marginTop:'20px'}}>
//         <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add New todo" onChange={this.handleChange} value={this.state.content} />
//        </div>
//       </form>
//     </div>
//     );
// }
// }
// export default Addtodo;