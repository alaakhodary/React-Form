import React, { Component } from "react";
import { Link } from "react-router-dom";

import BackgroundImage from "../../Component/BackgroundImage";
import Logo from "../../Component/Logo";
import Content from "../../Component/Content";
import Container from "../../Component/Container";
import Form from "../../Component/Form";

import imgDots from "../../assets/images/dots.png";

import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

class SignUpBefore extends Component {
  render() {
    return (
      <div className="div-flex">
        <BackgroundImage>
          <Logo />
          <div className="img-1">
            <img src={imgDots} alt="" />
          </div>
          <div>
            <Content
              type="detial"
              details="I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them."
              name="Hideo Kojima"
            />
          </div>
        </BackgroundImage>
        <div className="right-side">
          <div className="div-1">
            <FontAwesomeIcon
              icon={faAngleLeft}
              style={{ color: " #8692A6", fontSize: 16 }}
            ></FontAwesomeIcon>
            <Link to="/" className="link">
              Back
            </Link>
          </div>
          <Container>
            <div className="headerSection">
              <h1>Register Individual Account!</h1>
              <p className="paragrph">
                For the purpose of gamers regulation, your details are required.
              </p>
            </div>
            <hr className="line" />
            <Form />
          </Container>
        </div>
      </div>
    );
  }
}

export default SignUpBefore;
