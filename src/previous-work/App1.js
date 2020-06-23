import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Check from './check';
import Form from './Form';
/*
class App extends    {
 constructor(props){
   super(props);
  this.state={
    name:"rajat"
  }
  
 }
 checks=()=>console.log(this.state.name)


 
  render() {
    return (
      <div className="App">
     <h1>her</h1> 
     <button onClick={this.checks}>click</button>      
  
      </div>
    );
  }
}


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      count: "rajat",
    };
  }
  change=(e)=>{
    this.setState({
      count:e.target.value
    })
 
  }
  Sub=(e)=>{
e.preventDefault();
  }
  render(){
  return (<div className="App">
    
  <h1>{this.state.count}</h1>
    <form onSubmit={this.Sub} >
      <input type="text" onChange={this.change}/> 
      <button >Click
    </button>
    </form>
    <div> 

    <Check name="Rajat" age="four"/>
    
    <Form/>
    </div>
    
    
  
  )
}
}
*/


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     space:[
       {name:"rjat",age:21,id:1},
       {name:"jat",age:21,id:2},
       {name:"rt",age:21,id:3}
    
    ]
    };
  }
 fromChild=(formse)=>{
   formse.id=Math.random()
   let first=[...this.state.space,formse];
   this.setState({
     space:first
   })

 }
 delete=(del)=>{
//console.log(del)\
let change=this.state.space.filter((e)=>{
  return e.id !==del
});
this.setState({
  space:change
})

 }
  render() {
    return (
      <div className="App">
        <Check lo={this.state.space} del={this.delete}/>
        <h1>////////////</h1>
        <Form go={this.fromChild}/>
      </div>
    );
  }
}

export default App;

