import React, { Component } from 'react';
import Nav from './Component/Nav';
import {BrowserRouter,Route} from 'react-router-dom';
import Contact from './Component/Contact';
import Home from './Component/Home';
import About from './Component/About';
class App extends Component {
    constructor(){
        super();
        this.state={

        }
    }
    render() {
        return (
            <BrowserRouter>
            <div className="App">
                <Nav/>
                <Route path="/" component={Home}/>
                < Route  path="/about" component={About}/>
                < Route  path="/contact" component={Contact}/>


            </div>
            </BrowserRouter>
        );
    }
}

export default App;
