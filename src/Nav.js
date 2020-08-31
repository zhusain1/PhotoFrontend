import React from 'react';
import './App.css';
import App from './App';
import Gallery from './Gallery'
import NavBar from './NavBar'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

class Nav extends React.Component{
  render(){
    return (
    <div>
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={App} /> 
                <Route exact path="/Gallery/:folder" component={Gallery} />
            </Switch>
        </Router>
    </div>
    );
  }
}

export default Nav;
