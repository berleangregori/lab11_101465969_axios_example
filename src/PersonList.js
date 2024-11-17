import React, { Component } from 'react';
import axios from 'axios';
import './PersonList.css';

class PersonList extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=3')
      .then(res => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({ persons });
      })
      .catch(error => console.log('Error fetching data: ', error));
  }

  render() {
    return (
      <div>
        <h2>User List</h2>
        <div className="person-list">
          {this.state.persons.map((person, index) => (
            <div key={index} className="person-card">
              <img src={person.picture.medium} alt={`${person.name.first} ${person.name.last}`} className="profile-photo" />
              <div className="person-details">
                
                <div className="full-name">
                  {person.name.first} {person.name.last} 
                  <span className="user-id"> - {person.login.uuid}</span>
                </div>

                
                <div><strong>User Name:</strong> {person.login.username}</div>
                <div><strong>Gender:</strong> {person.gender}</div>
                <div><strong>Time Zone Description:</strong> {person.location.timezone.description}</div>
                <div><strong>Address:</strong> {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country}</div>
                <div><strong>Email:</strong> {person.email}</div>
                <div><strong>Birth Date:</strong> {person.dob.date}</div>
                <div><strong>Age:</strong> {person.dob.age}</div>
                <div><strong>Register Date:</strong> {person.registered.date}</div>
                <div><strong>Phone#:</strong> {person.phone}</div>
                <div><strong>Cell#:</strong> {person.cell}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PersonList;
