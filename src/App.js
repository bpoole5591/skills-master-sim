import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import CreateUser from "./components/createUser";
import { Link } from "react-router-dom";
import logo from "./users.svg";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      min: null,
      max: null
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:3005/api/users/min").then(res => {
      this.setState({ min: res.data.min });
    });
    axios.get("http://localhost:3005/api/users/max").then(res => {
      this.setState({ max: res.data.max });
    });
  }

  handleEmail(email) {
    this.setState({ email: email });
  }

  handlePassword(pass) {
    this.setState({ password: pass });
  }

  handleCreate() {
    const { email, password } = this.state;
    axios
      .post("http://localhost:3005/api/users/create", { email, password })
      .then(() => this.props.history.push("/home"))
      .catch(console.log);
  }

  render() {
    const { min, max } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Users!</h1>
        </header>
        <div>
          <button className="btn btn-outline-primary my-2 my-sm-0">
            <Link to="/home" style={{ textDecoration: "none" }}>
              View User List
            </Link>
          </button>
          <p>
            <input
              className="mr-sm-2"
              placeholder="Email"
              onChange={e => this.handleEmail(e.target.value)}
            />
            <input
              className="mr-sm-2"
              placeholder="Password (Fake one!)"
              onChange={e => this.handlePassword(e.target.value)}
            />
            <CreateUser create={this.handleCreate} />
          </p>
          <p>
            The min/max autogenerated ID for the current users is --> {min}/{
              max
            }
          </p>
        </div>
      </div>
    );
  }
}
