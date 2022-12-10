import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../components/createFit.css';

export default class CreateFitness extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // assures that "this" works properly referring to our class component. So we're binding this to our methods

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
    // All the parts of the database. State is how we create our variables in react. So we create everything in state so that when we update state we automatically update our interface with new values.
  }

  componentDidMount() {
    this.setState({
      users: ['test user'],
      username: 'test user'
    })
  }
  // life cycle method that automatically called before page loads. This is a test method. Eventually data will load from MongoDB

  onChangeUserName(e) {
    this.setState({
      username: e.target.value
    })
  }
  // methods to update state properties

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
  // used a library to make a calendar to appear so that our users can click the date on the calendar

  onSubmit(e) {
    e.preventDefault();

    const fitness = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(fitness);

    window.location = "/";
    // after submitting an fitness log, page goes back to home screen
  }
  // this method handles the submit of our form

  render() {
    return (
      <div className="form-box">
        <h3>Create A Fitness Log</h3>
        <form onSubmit={this.onSubmit}>
          {/* calls our submit method when button clicks */}
          <div className="form-section"> 
            <label className="user">Username: </label>
            <select ref="userInput"
                required
                className="form-handle"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    // this data comes from our database we called the map method to return the options in the "select" box of our form
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-section"> 
            <label className="descr">Description: </label>
            <input  type="text"
                required
                className="form-handle"
                value={this.state.description}
                onChange={this.onChangeDescription}
                />
          </div>
          <div className="form-section">
            <label className="dur">Duration (in minutes): </label>
            <input 
                type="text" 
                className="form-handle"
                value={this.state.duration}
                onChange={this.onChangeDuration}
                />
          </div>
          <div className="form-section">
            <label className="date">Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
              {/* pre existing package to create a calendar with dates of our fitness logs */}
            </div>
          </div>

          <div className="form-section">
            <input type="submit" value="Create A Fitness Log" className="btn-btn-primary" />
          </div>
        </form>
      </div>
    )
  }
  // this is a pretty standard HTML form
}