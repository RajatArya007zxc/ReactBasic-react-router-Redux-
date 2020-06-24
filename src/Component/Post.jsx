import React, { Component } from 'react';

class Post extends Component {
    constructor(){
        super();
        this.state={
    
            post:null
        }
    }
    componentDidMount(){
      //  console.log(this.props)
        let id =this.props.match.params.post_id;
        fetch('https://jsonplaceholder.typicode.com/posts/' + id )
    /*  .then(res=>{
            this.setState({
                post:res
            })
            console.log(res)
        })
        
      */
     .then(res=>res.json())
     .then(r=>{
        this.setState({
         post:r
     })
     //console.log(r)
   
    } )
    
        
    }
    render() {
 
      const e=this.state.post?(
             <div className="post">
                 <h4 className="center">{this.state.post.title}</h4>
         <p>{this.state.post.body}</p>

             </div>
         ):(
             <div className="center">Wait to load</div>
         )




        return (
            <div className="container">
                {e}
            </div>
        );
    }
}

export default Post;
