import React, { Component } from "react";
import axios from "axios";

import swal from "sweetalert";

import "./style.css";

import { NavLink } from "react-router-dom";

import { API_URL } from "../../config/API";

import User from "../../Component/User";
import Sidebar from "../../Component/Sidebar";

export default class UsersList extends Component {
  state = {
    users: [],
    isLoading: true,
  };

  token = localStorage.getItem("token");
  async componentDidMount() {
    try {
      const res = await axios.get(
        "https://react-tt-api.onrender.com/api/users",
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );

      this.setState({ users: res.data });
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }

  deleteUser = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/users/${id}`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      swal({
        title: "Success!!",
        text: `${res.data.message}  Successfully !!`,
        icon: "success",
        timer: 1000,
        button: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        <User />
        <Sidebar />
        <ul className="ul-userList">
          <h2>Users List :</h2>
          <div className="div-all-item">
            {this.state.isLoading
              ? "Loading .. "
              : this.state.users.map((item, index) => (
                  <li key={item._id} className="items">
                    <NavLink to={`${item._id}`}>
                      <p className="p-item">
                        {index + 1} :{item.email}
                      </p>
                    </NavLink>
                    <button
                      onClick={() => this.deleteUser(item._id)}
                      className="btn-del"
                    >
                      delete
                    </button>
                  </li>
                ))}
          </div>
        </ul>
      </div>
    );
  }
}
