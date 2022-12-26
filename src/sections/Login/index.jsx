import React, { Component } from "react";
import Content from "../../Component/Content";
import LogoImage from "../../assets/images/logo1.png";
import controlImage from "../../assets/images/control.png";
import "./style.css";
import Container from "../../Component/Container";
import Social from "../../Component/Social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({
      [id]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
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
            <div className="div-emails">
              <label htmlFor="email" className="label-emails">
                Your email
              </label>
              <input
                className="input-emails"
                required
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
                required
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
                  <a href="/#" className="link-register">
                    <span className="span-regester">Register</span>
                  </a>
                </p>
              </div>
            </div>
          </form>
        </Container>
      </div>
    );
  }
}
