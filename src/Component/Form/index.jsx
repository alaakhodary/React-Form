import React, { Component } from "react";
import image from "../../assets/images/google.svg";
import "./style.css";
import * as yup from "yup";

const regularExp =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$";

export default class Form extends Component {
  state = {
    email: "",
    password: "",
    repeatPassword: "",
    checked: false,
    /* passwordStrength: 0, */
  };

  schema = yup.object().shape({
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
        email: this.state.email,
        password: this.state.password,
        repeatPassword: this.state.repeatPassword,
        abortEarly: false,
        checked: this.state.checked,
      })
      .then(() => console.log("validated"))
      .catch(function (err) {
        console.log(err.errors);
      });
  };

  handleChangeCheckbox = (e) => {
    this.setState({ checked: e.target.checked });
  };

  render() {
    /* let strength = "Weak";
    if (this.state.password.length >= 8) {
      strength = "Medium";
    }
    if (
      this.state.password.match(/[a-z]/g) &&
      this.state.password.match(/[A-Z]/g) &&
      this.state.password.match(/[0-9]/g) &&
      this.state.password.match(/[^a-zA-Z\d]/g)
    ) {
      strength = "Strong";
    } */

    return (
      <form className="form-control" onSubmit={this.handleSubmit}>
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
        {/*  <div>{strength}</div> */}
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
          <a href="/#">
            <button type="button" className="login-google">
              login
            </button>
          </a>
        </div>
      </form>
    );
  }
}
