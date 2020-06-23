import React from 'react';

const RainBow = (WrappedComponent) => {
    const colors=["red","green","blue","pink","yellow"]
    const select=colors[Math.floor(Math.random()*4)]

    const className=select + '-text';
    return (props)=>{
        return (
            <div className={className}> 
            <WrappedComponent {...props}/>
                
            </div>
        );
    }
}

export default RainBow;
