import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
     // assures that "this" works properly referring to our class component. So we're binding this to our methods

    this.state = {
      username: ''
    }
    // All the parts of the database. State is how we create our variables in react. So we create everything in state so that when we update state we automatically update our interface with new values.
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
    // methods to update state properties
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('http://localhost:4000/users/add', user)
      .then(res => console.log(res.data));
      // post request to endpoint

    this.setState({
      username: ''
    })
    // we can add multiple users at a time without page returning to home screen
  }

  render() {
    return (
      <div className="form-box">
        <h3>Create A User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-section"> 
            <label>Username: </label>
            <input type="text"
                required
                className="form-handle"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-section">
            <input type="submit" value="Create User" className="btn-btn-primary" />
          </div>
        </form>
    </div>
    )
  }
}