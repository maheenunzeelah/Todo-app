import React, {Component} from 'react';

class Addtodo extends Component{
    state={
      content:''
    }
handleSubmit=(e)=>{
    e.preventDefault();
    this.props.add(this.state);
    this.setState({
        content:''
    })
}
handleChange=(e)=>{
    this.setState({
        content:e.target.value
    })
    localStorage.setItem("new item",e.target.value)
}
render(){
    return(
    <div className="container">
      <form onSubmit={this.handleSubmit}>
       <div className="form-group" style={{marginTop:'20px'}}>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add New todo" onChange={this.handleChange} value={this.state.content} />
       </div>
      </form>
    </div>
    );
}
}
export default Addtodo;