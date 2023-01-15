/* import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default class ProtectedRoute extends Component {
  render() {
    return (
      <div>
        {this.props.isAuthorized ? <Outlet /> : <Navigate to="/login" />}
      </div>
    );
  }
} */
import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Navlink from "../Component/Navlink";

export default class ProtectedRoute extends Component {
  render() {
    return (
      <>
        <Navlink logout={this.props.logout} admin={this.props.admin} />
        <Outlet />
      </>
    );
  }
}
