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
                <Route  key="engagement" exact path='/gallery/engagement'
                    render={(props) => (
                      <Gallery {...props} folderName={'engagement'} />
                )}/>
                <Route key = "backgrounds" exact path='/gallery/backgrounds'
                    render={(props) => (
                      <Gallery {...props} folderName={'backgrounds'} 
                />)}/>
                <Route key = "product" exact path='/gallery/products'
                    render={(props) => (
                      <Gallery {...props} folderName={'products'} 
                />)}/>
            </Switch>
        </Router>
    </div>
    );
  }
}

export default Nav;
