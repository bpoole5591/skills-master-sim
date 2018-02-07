import React, { Component } from "react";
import axios from "axios";
import logo from "../users.svg";
import { Link } from "react-router-dom";
import "../App.css";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false,
      users: []
    };

    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    this.setState({ users: this.props.users });
  }

  componentWillReceiveProps(nextProps) {
    const { users } = this.state;
    if (users !== nextProps.users) this.setState({ users: nextProps.users });
  }

  updateUser(id) {
    axios.put("http://localhost:3005/api/users/update", { id }).then(res => {
      this.setState({ users: res.data });
    });
  }

  deleteUser(id) {
    axios
      .delete("http://localhost:3005/api/users/delete", { data: { id } })
      .then(res => {
        this.setState({ users: res.data });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Users!</h1>
        </header>
        <div>
          <button className="btn btn-outline-primary my-2 my-sm-0">
            <Link to="/" style={{ textDecoration: "none" }} >
              Add Another User
            </Link>
          </button>
          <div>
          Total Number of Users --> {this.state.users.length}
          </div>
          {this.state.users.map((key, i) => (
            <div key={key.id} style={{ marginTop: 50 }}>
              <div>Email Address: {key.email}</div>
              <div>Password: {key.password}</div>
              <div>
                <button
                  className="btn btn-outline-primary my-2 my-sm-0"
                  onClick={() => this.updateUser(key.id)}
                >
                  Hide User Credentials!
                </button>
              </div>
              <div>
                <button
                  className="btn btn-outline-primary my-2 my-sm-0"
                  onClick={() => this.deleteUser(key.id)}
                >
                  Delete User
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
