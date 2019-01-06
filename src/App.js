import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import VideoPlayer from './components/VideoPlayer';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
      <div style={{backgroundColor:'lavender',minHeight:'-webkit-fill-available'}} >
          <Header></Header>
          <Route exact path="/"   component={Home}></Route>
          <Route path='/signin' component={SignIn}/>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/news" component={SignIn}></Route>
          <Route path="/videos" component={VideoPlayer}></Route>
         
          
      </div>
      </Router>
      
    );
  }
}

export default App;
