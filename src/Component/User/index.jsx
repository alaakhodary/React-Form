import React, { Component } from "react";
import "./style.css";

export default class User extends Component {
  render() {
    const { userName, imgageUser } = this.props;
    return (
      <div className="div-User">
        <div className="div-paragraph-user">
          <p className="p-user">
            Welcome back,
            <span className="span-user">{userName}!</span>
          </p>
        </div>
        <div>
          <img src={imgageUser} alt="img-user" className="div-imgUser" />
        </div>
      </div>
    );
  }
}
