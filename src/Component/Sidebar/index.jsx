import React, { Component } from "react";
import "./style.css";
import panel from "../../assets/images/Game-panel.png";
import Wishlist from "../../assets/images/like.svg";
import sittings from "../../assets/images/sittings.svg";
import vector from "../../assets/images/Puzzle.svg";
import Moon from "../../assets/images/moon.png";
import Sun from "../../assets/images/Sun-one.svg";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="div-Sidebar">
        <div className="div-panel">
          <img src={panel} alt="game-panel" />
        </div>
        <div className="div-sub-icon">
          <div className="div-wishlist">
            <img src={Wishlist} alt="wishlist" />
          </div>
          <div className="div-sittings">
            <img src={sittings} alt="sittings" />
          </div>
          <div className="vector">
            <img src={vector} alt="vector" />
          </div>
        </div>
        <div className="theam">
          <div className="moon">
            <button type="submit" className="btn-moon">
              <img src={Moon} alt="moon" />
            </button>
          </div>
          <div className="sun">
            <button type="submit" className="btn-sun">
              <img src={Sun} alt="sun" />
            </button>
          </div>
        </div>
        <div className="hr"></div>
      </div>
    );
  }
}
