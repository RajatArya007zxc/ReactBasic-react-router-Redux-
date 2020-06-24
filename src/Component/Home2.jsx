import React, { Component } from 'react';

class Home2 extends Component {
    constructor(){
        super();
        this.state={

            posts:[]
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res=>res.json())
        .then(r=>r.map(data=>data.id))
        .then(q=>{
            if(q <10){
                this.setState({
                    posts:q
                })
            }
        })
      
    }
    render() {
        return (
            <div >
                YPOYY
            </div>
        );
    }
}

export default Home2;
