import React, { Component } from 'react';
import Todos from '../Todos';
import AddTask from './AddTask';

class  extends Component {
    constructor(props){
        super(props);
        this.state={
            todo:[
                {id:1,content:"today work is doing some excercise"},
                {id:2,content:"work some creative today"}
            ]
        }
    }
    deleteTask=(id)=>{
   const todo=this.state.todo.filter(el=>{
       return el.id !=id
   })
   this.setState({
      todo  //this will work if above const 'todo' and 'this.state.todo' is same
   //otherwise todo: variable jo define hai
    })
    }

hereToAdd=(todo)=>{
    
 todo.id=Math.random();
 let s=[...this.state.todo,todo]
 this.setState({
     todo:s
 })
}


    render() {
        return (
            <div className="todo-app container">
                <h1 className="center blue-text ">Todos</h1>
                <Todos todos={this.state.todo} deletes={this.deleteTask}/>
   <AddTask here={this.hereToAdd}/>
            </div>
        );
    }
}

export default App;
