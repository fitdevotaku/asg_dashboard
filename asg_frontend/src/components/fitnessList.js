import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Fitness = props => (
  <tr className="form-section">
    <td>{props.fitness.username}:</td>
    <td>{props.fitness.description}</td>
    <td>{props.fitness.duration}</td>
    <td>{props.fitness.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.fitness._id}>
        <input type="submit" value="Edit" className="btn-btn-primary" />
      </Link> <input type="submit" value="Delete" className="btn-btn-primary" onClick={() => { props.deleteFitness(props.fitness._id) }} />
    </td>
  </tr>
)

export default class FitnessList extends Component {
  constructor(props) {
    super(props);

    this.deleteFitness = this.deleteFitness.bind(this)

    this.state = {fitness: []};
  }

  componentDidMount() {
    axios.get('http://localhost:4000/fitness/')
      .then(response => {
        this.setState({ fitness: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  } 
    // get a list of data from our database

  deleteFitness(id) {
    axios.delete('http://localhost:4000/fitness/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      fitness: this.state.fitness.filter(el => el._id !== id)
    })
  }  

    // delete method to remove data from our database and frontend

  fitnessList() {
    return this.state.fitness.map(currentfitness => {
      return <Fitness fitness={currentfitness} deleteFitness={this.deleteFitness} key={currentfitness._id}/>;
    })
  }

  render() {
    return (
      <div className="form-box">
        <h3>Logged Fitness Training</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username:</th>
              <th>Description:</th>
              <th>Duration:</th>
              <th>Date:</th>
              <th>Actions:</th>
            </tr>
          </thead>
          <tbody>
            { this.fitnessList() }
          </tbody>
        </table>
      </div>
    )
  }
}
