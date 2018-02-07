import React, { Component } from "react";
export default class CreateUser extends Component {
  render(props) {
    return (
      <p>
        <button
          className="btn btn-outline-primary my-2 my-sm-0"
          onClick={this.props.create}
        >
          Submit
        </button>
      </p>
    );
  }
}
