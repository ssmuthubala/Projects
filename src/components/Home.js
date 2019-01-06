import React, { Component } from 'react';
import marina_night from '../marina_night.jpg'

class Home extends Component {
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
        <div>
            <img src={marina_night}></img>
            <div style={{position:'absolute',margin:'0px 0px 0px 0px'}}> Welcome to HashTags Media </div>
        </div>
     
    )
  }
}

export default Home
