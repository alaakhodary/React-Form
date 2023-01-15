import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

export default class Navlink extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <button onClick={this.props.logout} className="logout">
            Logout
          </button>
          <NavLink to="/dashboard" className="nav-1">
            Home
          </NavLink>
          <NavLink to="/dashboard/profile" className="nav-1">
            Profile
          </NavLink>
          {this.props.admin ? (
            <NavLink to="/dashboard/userslist" className="nav-1">
              UsersList
            </NavLink>
          ) : (
            ""
          )}
        </nav>
      </div>
    );
  }
}
