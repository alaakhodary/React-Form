import React, { Component } from "react";
import axios from "axios";

import image from "../../assets/images/google.svg";

import { API_URL } from "../../config/API";

import "./style.css";

import * as yup from "yup";
import { Link } from "react-router-dom";

const regularExp =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

export default class Form extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    checked: false,
    /* passwordStrength: 0, */
  };

  schema = yup.object().shape({
    name: yup.string().min(8).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).matches(regularExp).required(),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
    checked: yup.boolean().oneOf([true]).required(),
  });

  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({
      [id]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    /*  console.log(this.state); */
    this.schema
      .validate({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        repeatPassword: this.state.repeatPassword,
        abortEarly: false,
        checked: this.state.checked,
      })
      .then(async () => {
        const res = await axios.post(`${API_URL}/users/signup`, {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
        });
        if (res) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.name);
          this.props.login();
        }
      })
      .catch(function (err) {
        console.log(err.errors || [err.message]); // errors => validate && message => axios(api)
      });
  };

  handleChangeCheckbox = (e) => {
    this.setState({ checked: e.target.checked });
  };

  render() {
    return (
      <form className="form-control" onSubmit={this.handleSubmit}>
        <div className="div-name">
          <label htmlFor="name" className="label-name">
            name*
          </label>
          <input
            className="input-name"
            type="text"
            id="name"
            placeholder="Enter your name"
            onChange={this.handleChangeInput}
            value={this.state.name}
          />
        </div>
        <div className="div-email">
          <label htmlFor="email" className="label-email">
            Email address*
          </label>
          <input
            className="input-email"
            type="email"
            id="email"
            placeholder="Enter email address"
            onChange={this.handleChangeInput}
            value={this.state.email}
          />
        </div>
        <div className="div-password">
          <label htmlFor="password" className="label-password">
            Create password*
          </label>
          <input
            className="input-password"
            type="password"
            id="password"
            placeholder="Password"
            onChange={this.handleChangeInput}
            value={this.state.password}
          />
        </div>
        <div className="div-repeat">
          <label htmlFor="repeatPassword" className="label-repeat">
            Repeat password*
          </label>
          <input
            className="input-repeat"
            type="password"
            id="repeatPassword"
            placeholder="Repeat password"
            onChange={this.handleChangeInput}
            value={this.state.repeatPassword}
          />
        </div>
        <div className="checked">
          <input
            type="checkbox"
            id="checked"
            className="input-check"
            onChange={this.handleChangeCheckbox}
            value={this.state.checked}
          />
          <label htmlFor="checked" className="label-check">
            I agree to terms & conditions
          </label>
        </div>
        <div className="div-submit">
          <button type="submit" className="btn-submit">
            Register Account
          </button>
        </div>
        <div className="hr-or">
          <hr className="line" />
          <p className="or">Or</p>
        </div>
        <div className="google-login">
          <img src={image} alt="" className="google" />
          <Link to="/login">
            <button type="button" className="login-google">
              login
            </button>
          </Link>
        </div>
      </form>
    );
  }
}
