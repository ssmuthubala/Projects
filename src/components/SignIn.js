import React, { Component } from 'react';
import './../styles/Signin.css'

class SignUp extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <React.Fragment>
       <div style={{display:'flex',paddingBottom:'50vh'}}>
         <div style={{width:'60vh'}}></div>
         <div className="singincontainer">
        
            <form onSubmit={this.handleSubmit}>
              <h5 >Sign In</h5>
        
              <div>
                <label htmlFor="email">Email</label>
                <input className="inputField" type="email" id='email' onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input  className="inputField" type="password" id='password' onChange={this.handleChange} />
              </div>
              <div>
                <button className="submit">SignIn</button>
              </div>
            </form> 
          </div>
          <div></div>
        <div style={{width:'55vh'}}></div>
      </div>
      </React.Fragment>
    )
  }
}

export default SignUp
