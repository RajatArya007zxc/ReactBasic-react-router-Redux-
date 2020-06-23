import React, { Component } from 'react';

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res=>res.json())
        
        .then(r=>this.setState({posts:r
        }))
    }
    
    render() {
        const {posts} =this.state;
        const postList =posts.length ?( 
            posts.map(post=>{
                return(
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                <span  className="card-title">{post.title}</span>
                <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ):(
            <div className="center">No Post</div>
         )

        return (
            
                <div className="container">
            <h4 className="center">Home</h4>
            {postList}
        </div>
            
        );
    }
}

export default Home;

/* 
when we put the .then(r=>console.log(r.json()))

its gives us an error at say length is not defined



*/