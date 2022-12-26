import React, { Component } from "react";
import LogoImage from "../../assets/images/logo.png";

export default class Logo extends Component {
  render() {
    return <img src={LogoImage} alt="logo" className="image" />;
  }
}
