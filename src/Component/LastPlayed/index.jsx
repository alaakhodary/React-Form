import React, { Component } from "react";
import "./style.css";

export default class LastPlayed extends Component {
  render() {
    const { text, imgPlayer } = this.props;
    return (
      <div className="div-player">
        <img src={imgPlayer} alt="imgPlayer" className="HogImg" />
        <p className="paragraph">{text}</p>
      </div>
    );
  }
}
