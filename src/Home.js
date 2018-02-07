import React, { Component } from "react";
// import "./Home.css";
import axios from "axios";
import Users from "./components/users";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/api/users`).then(res => {
      this.setState({ users: res.data });
    });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <Users users={users} />
      </div>
    );
  }
}
