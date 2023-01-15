import React, { Component } from "react";

import "./style.css";

export default class User extends Component {
  state = {
    name: "",
  };
  componentDidMount() {
    const username = localStorage.getItem("name");
    this.setState({ name: username });
  }

  render() {
    const { imgageUser } = this.props;
    return (
      <div className="div-User">
        <div className="div-paragraph-user">
          <p className="p-user">
            Welcome back,
            <span className="span-user">{this.state.name}!</span>
          </p>
        </div>
        <div>
          <img src={imgageUser} alt="img-user" className="div-imgUser" />
        </div>
      </div>
    );
  }
}
