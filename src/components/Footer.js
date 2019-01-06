import React, { Component } from 'react';
import image from '../LogoMakr_1xAkjh.png';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import SignIn from './SignUp';

class Footer extends Component {
  render() {
    return (
        <Router>
      <React.Fragment>    
      <header style={{backgroundColor:'slateblue',height:'9vh',display:'flex',padding:'15px'}}>
        
          <div  style={{display:'flex',width:'120vh'}}>
          <div><img  style={{width:'15vh'}} src={image}></img></div>
          <div style={{margin:"8px 0px 0px -14px"}}><a  style={{fontSize:'30px',color:'midnightblue'}}>HASHTAG MEDIA</a></div>
          </div>
        
      </header>
      </React.Fragment> 
     
      </Router>

    );
  }
}

export default Footer;








