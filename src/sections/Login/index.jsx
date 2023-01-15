import React, { Component } from "react";
import { Link } from "react-router-dom";

import Content from "../../Component/Content";
import Container from "../../Component/Container";
import Social from "../../Component/Social";
import { API_URL } from "../../config/API";

import LogoImage from "../../assets/images/logo1.png";
import controlImage from "../../assets/images/control.png";

import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import * as yup from "yup";
import axios from "axios";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    isLoading: false,
    /*  errors: [], */
  };

  schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({
      [id]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.schema
      .validate({
        email: this.state.email,
        password: this.state.password,
        abortEarly: false,
      })
      .then(async () => {
        this.setState({ isLoading: true });
        const res = await axios.post(`${API_URL}/users/login`, {
          email: this.state.email,
          password: this.state.password,
        });
        if (res) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.name);
          localStorage.setItem("admin", res.data.isAdmin ? "true" : "false");
          if (res.data.isAdmin) this.props.admin();
          this.props.login();
        }
      })
      .catch(function (err) {
        console.log(err.errors || [err.message]); // errors => validate && message => axios(api)
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    return (
      <div className="login-div">
        <div className="divLogo">
          <img src={LogoImage} alt="" className="imglogo" />
          <Content
            details="I always observe the people who pass by when I ride an
            escalator. I'll never see most of them again, so I imagine a lot of
            things about their lives... about the day ahead of them."
            name="Hideo Kojima"
          />
          <div className="controls-img">
            <img src={controlImage} alt="" />
          </div>
        </div>
        <Container>
          <div className="secound-side">
            <h1>Join the game!</h1>
            <p className="paragrphs">
              Go inside the best gamers social network!
            </p>
          </div>
          <hr className="hr-login" />
          <Social />
          <div className="hrOr">
            <hr className="lines" />
            <p className="oR">Or</p>
          </div>
          <form className="form-controls" onSubmit={this.handleSubmit}>
            {/* <div style={{ color: "red" }}>
              {this.state.errors.map((error) => (
                <span>{error}</span>
              ))}
            </div> */}
            <div className="div-emails">
              <label htmlFor="email" className="label-emails">
                email
              </label>
              <input
                className="input-emails"
                type="email"
                id="email"
                placeholder="Write your email"
                onChange={this.handleChangeInput}
                value={this.state.email}
              />
            </div>
            <div className="div-password">
              <label htmlFor="password" className="label-passwords">
                Enter your password
              </label>
              <input
                className="input-passwords"
                type="password"
                id="password"
                placeholder="Password"
                onChange={this.handleChangeInput}
                value={this.state.password}
              />
              <div className="icon-eye-slash">
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
              </div>
              <button type="submit" className="login_google">
                Login
              </button>
              <div className="register">
                <p className="paragraphs">
                  Don’t have an account?
                  <Link to="/signup" className="link-register">
                    <span className="span-regester">Register</span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </Container>
      </div>
    );
  }
}
