import React, { Component } from "react";
import ProfileTableList from "./ProfileTableList";

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      over18: "",
      profiles: []
    };
  }

  handleOnChange = event => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState({
      [name]: value
    });
  };

  saveProfile = () => {
    let newObj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      over18: this.state.over18
    };

    let newProfiles = this.state.profiles.slice();

    newProfiles.push(newObj);

    this.setState({
      profiles: newProfiles,
      firstName: "",
      lastName: "",
      gender: "",
      over18: ""
    });
  };

  render() {
    let displayOver18 = "";

    if (this.state.over18 === true) {
      displayOver18 = "Yes";
    } else {
      displayOver18 = "No";
    }

    return (
      <div className="container">
        <label>First Name</label>
        <input
          className="form-control"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.handleOnChange}
        />
        <label>Last Name</label>
        <input
          className="form-control"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={this.handleOnChange}
        />
        <label>Gender</label>
        <select
          className="form-control"
          name="gender"
          value={this.state.gender}
          onChange={this.handleOnChange}
        >
          <option value="">Please select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
        <label>
          Over 18?
          <input
            className="form-control"
            type="checkbox"
            name="over18"
            value={this.state.over18}
            onChange={this.handleOnChange}
          />
        </label>
        <br />
        <button className="btn btn-primary" onClick={this.saveProfile}>
          Submit
        </button>
        <ProfileTableList profiles={this.state.profiles} />
        <br />
      </div>
    );
  }
}