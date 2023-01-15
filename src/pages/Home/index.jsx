import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../../sections/Login";
import SignUpBefore from "../../sections/SignUpBefore";
import GamePanel from "../../sections/GamePanel";
import Profile from "../../sections/Profile";
import UsersList from "../../sections/UserList";
import UserDetails from "../../sections/UserDetails";

import ProtectedRoute from "../../Component/ProtectedRoute";

export default class Home extends Component {
  state = {
    isAuthorized: false,
    isAdmin: false,
  };

  login = () => {
    this.setState({ isAuthorized: true });
  };

  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("admin");
    this.setState({ isAuthorized: false });
    this.setState({ isAdmin: false });
  };

  admin = () => {
    this.setState({ isAdmin: true });
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) this.setState({ isAuthorized: true });

    const admin = localStorage.getItem("admin");
    if (admin === "true") this.setState({ isAdmin: true });
  }

  render() {
    return (
      <>
        <Routes>
          <Route index element={<Navigate to="/login" />} />

          <Route
            path="/login"
            element={
              this.state.isAuthorized ? (
                <Navigate to="/dashboard" />
              ) : (
                <Login login={this.login} admin={this.admin} />
              )
            }
          />

          <Route
            path="/signup"
            element={
              this.state.isAuthorized ? (
                <Navigate to="/dashboard" />
              ) : (
                <SignUpBefore login={this.login} />
              )
            }
          />

          <Route
            path="/dashboard"
            element={
              this.state.isAuthorized ? (
                <ProtectedRoute
                  admin={this.state.isAdmin}
                  logout={this.logout}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          >
            <Route index element={<GamePanel />} />
            <Route path="profile" element={<Profile />} />
            <Route
              path="userslist"
              element={
                this.state.isAdmin ? (
                  <UsersList />
                ) : (
                  <Navigate to="/dashboard" />
                )
              }
            />
            <Route
              path="userslist/:id"
              element={
                this.state.isAdmin ? (
                  <UserDetails />
                ) : (
                  <Navigate to="/dashboard" />
                )
              }
            />
          </Route>

          <Route path="*" element={<h1>Erorr 404</h1>} />
        </Routes>
      </>
    );
  }
}
