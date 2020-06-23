import React from 'react';
import RainBow from '../HOC/RainBow'
const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptate aut aperiam quaerat quia, rerum est nesciunt in iste, dolore sit, eveniet itaque?</p>
            
        </div>
    );
}

export default RainBow(About);