import React, { Component } from 'react';
import image from '../LogoMakr_1xAkjh.png';
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <React.Fragment>    
      <header style={{backgroundColor:'slateblue',height:'12vh',display:'flex',padding:'15px'}}>
        
          <div  style={{display:'flex',width:'120vh'}}>
          <Link to="/"> <div><img  style={{width:'15vh'}} src={image}></img></div></Link>
          <Link to="/">  <div style={{margin:"8px 0px 0px -14px"}}><a  style={{fontSize:'30px',color:'midnightblue'}}>HASHTAG MEDIA</a></div>  </Link> 
          </div>
        
        <Link to="/signin"><div style={{padding:'15px'}}>SignIn</div></Link> 
        <Link to="/signup"><div style={{padding:'15px'}}>SignUp</div></Link> 
        <Link to="/"> <div style={{padding:'15px'}}>News</div></Link> 
        <Link to="/videos"><div style={{padding:'15px'}}>Videos</div></Link> 
        <div style={{padding: '15px'}}><input type="text" placeholder="enter the search title"></input></div>
      </header>
      </React.Fragment> 

    );
  }
}

export default Header;








