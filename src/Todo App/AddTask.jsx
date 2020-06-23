import React, { Component } from 'react';

class AddTask extends Component {
    constructor(props){
        super(props)
            this.state={
content:''
            }
        
    }
    handleChange=(e)=>{
this.setState({
    content:e.target.value
})
    }

    submithandle=(e)=>{
        e.preventDefault();
        this.props.here(this.state);
        this.setState({
            content:''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submithandle}>
                    <label>Add new Task</label>
                    <input  type="text " onChange={this.handleChange} value={this.state.content}/>
                 
                 
                </form>
            </div>
        );
    }
}

export default AddTask;
