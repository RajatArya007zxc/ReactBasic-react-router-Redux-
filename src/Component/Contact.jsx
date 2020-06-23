import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptate aut aperiam quaerat quia, rerum est nesciunt in iste, dolore sit, eveniet itaque?</p>
            
        </div>
    );
}
/*
for redirect we can use 
Contact=(props)=>{
setTimeOut(()=>{
    props.history.push('/about')
},2000)
} */

export default Contact;