import React, { Component } from 'react'

class SignIn extends Component {
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
             <h5 >Sign Up</h5>
             <div>
                <label htmlFor="email">UserName</label>
                <input className="inputField" type="email" id='email' onChange={this.handleChange} />
             </div>
        
             <div>
                <label htmlFor="email">Email</label>
                <input className="inputField" type="email" id='email' onChange={this.handleChange} />
             </div>
             <div>
                <label htmlFor="password">Password</label>
                <input  className="inputField" type="password" id='password' onChange={this.handleChange} />
             </div>
             <div>
                <label htmlFor="password">Interest</label>
                <input  className="inputField" type="password" id='password' onChange={this.handleChange} />
             </div>
             <div>
                <button className="submit">SignUp</button>
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

export default SignIn
