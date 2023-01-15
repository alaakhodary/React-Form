import axios from "axios";
import React, { Component } from "react";

import Sidebar from "../../Component/Sidebar";
import User from "../../Component/User";

import "./style.css";

import { API_URL } from "../../config/API";

export default class Profile extends Component {
  state = { name: "", email: "", admin: "", message: "" };

  componentDidMount() {
    this.fetchUserProfile();
  }

  fetchUserProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      this.setState({ message: "You are not authorized to view this page" });
      return;
    }
    try {
      const response = await axios.get(`${API_URL}/users/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      this.setState({ name: response.data.name });
      this.setState({ email: response.data.email });
      this.setState({ admin: response.data.isAdmin ? "true" : "false" });
    } catch (error) {
      this.setState({ message: error.response.data.message });
    }
  };

  render() {
    return (
      <div>
        <User />
        <Sidebar />
        <div className="div-profile">
          {this.state.message}
          <h2>My Profile</h2>
          <p className="p-1">Name: {this.state.name}</p>
          <p className="p-1">Email: {this.state.email}</p>
          <p className="p-1">Admin: {this.state.admin}</p>
        </div>
      </div>
    );
  }
}
