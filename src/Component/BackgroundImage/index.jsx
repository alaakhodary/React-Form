import React, { Component } from "react";
import "./style.css";

export default class BackgroundImage extends Component {
  render() {
    return <div className="image-blue">{this.props.children}</div>;
  }
}
