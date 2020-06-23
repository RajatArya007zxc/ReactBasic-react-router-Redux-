import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state={
            name:null,age:null
        }
    }
    handleClick=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
       this.props.go(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text"  id="name"  onChange={this.handleClick}></input>
                    <br></br>
                    <label htmlFor="ag">age</label>
                    <input type="text" id="age"  onChange={this.handleClick}></input>
                    <button>Click</button>
                </form>
                
            </div>
        );
    }
}

export default Form;
