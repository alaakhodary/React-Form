import React, { Component } from "react";
import "./style.css";
import imgCard from "../../assets/images/ReacentTrophy.png";
import Cup from "../../assets/images/Cup.png";

export default class RecentTrophyCard extends Component {
  render() {
    const { textHeading, textDisc1, textDisc2 } = this.props;
    return (
      <div className="div-Card">
        <img src={imgCard} alt="" className="imgCard" />
        <p className="paragraphCard1">{textHeading}</p>
        <p className="paragraphCard2">{textDisc1}</p>
        <p className="paragraphCard3">{textDisc2}</p>
        <div className="div-Cup">
          <img src={Cup} alt="Cup" className="Cup" />
        </div>
      </div>
    );
  }
}
