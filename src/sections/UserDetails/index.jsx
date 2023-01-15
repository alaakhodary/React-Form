import React, { Component } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

import "./style.css";

import { API_URL } from "../../config/API";

import Sidebar from "../../Component/Sidebar";
import User from "../../Component/User";

export default function UserDetails() {
  const { id } = useParams();

  return <Details id={id} />;
}

class Details extends Component {
  state = {
    id: "",
    email: "",
    name: "",
    admin: "",
    isLoading: true,
  };
  async componentDidMount() {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.get(`${API_URL}/users/${this.props.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.setState({ name: res.data.name });
      this.setState({ email: res.data.email });
      this.setState({ id: res.data._id });
      this.setState({ admin: res.data.isAdmin ? "true" : "false" });

      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div>
        <Sidebar />
        <User />
        <ul className="ul-listofUser">
          <h2>User Details for {this.state.name}:</h2>
          {this.state.isLoading ? (
            "Loading ..."
          ) : (
            <li>
              <p className="p-1">ID :{this.state.id}</p>
              <p className="p-1">Name :{this.state.name}</p>
              <p className="p-1">Email :{this.state.email}</p>
              <p className="p-1">Admin :{this.state.admin}</p>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
