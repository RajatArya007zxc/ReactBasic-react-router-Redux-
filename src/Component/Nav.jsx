import React from 'react';
import {Link,withRouter} from "react-router-dom";

const Nav = (props) => {
    console.log(props);
    /*Actually the Nav is not in Route in App.js so we cant use props and props.history.push for redirect from home to another
    so that why we use higherOrderComponent withRouter which help to provide those functionality into other non Route component
    */
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Yes It Is</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>

                    {/* 
                    if use NavLink in place of Link its work the same but it give class="aCtive"
                    */}
                </ul>
            </div>
            
        </nav>
    );
}

export default withRouter(Nav);
