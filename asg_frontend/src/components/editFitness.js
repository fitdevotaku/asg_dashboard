import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditFitness extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/fitness/'+this.props.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          description: response.data.description,
          duration: response.data.duration,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:4000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const fitness = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(fitness);

    axios.post('http://localhost:4000/fitness/update/'+this.props.id, fitness)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div className="form-box">
        <h3>Edit Fitness Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-section"> 
            <label>Username:</label>
            <select ref="userInput"
                required
                className="form-handle"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-section"> 
            <label>Description:</label>
            <input type="text"
                required
                className="form-handle"
                value={this.state.description}
                onChange={this.onChangeDescription}
                />
          </div>
          <div className="form-section">
            <label>Duration (in minutes):</label>
            <input 
                type="text" 
                className="form-handle"
                value={this.state.duration}
                onChange={this.onChangeDuration}
                />
          </div>
          <div className="form-section">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-section">
            <input type="submit" value="Edit Fitness Log" className="btn-btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}