import React, { Component } from "react";
import "./style.css";
import background from "../../assets/images/backgroundWars.png";
import backgroundTown from "../../assets/images/Toun.png";
import backgroundCity from "../../assets/images/City.png";
import logo from "../../assets/images/logo-Wars.png";
import img from "../../assets/images/GODOFWAR.png";
import imgSuper from "../../assets/images/superman.png";
import imgSpider from "../../assets/images/spider.png";
import logoSpider from "../../assets/images/logoSpider.png";

export default class Slider extends Component {
  render() {
    const { text, type } = this.props;
    if (type === "Wars") {
      return (
        <div className="div-img">
          <img src={background} alt="background" className="background" />
          <img src={logo} alt="God-Wars" className="logoWars" />
          <img src={img} alt="God-Wars" className="imgWars" />
          <p className="pWars">{text}</p>
        </div>
      );
    } else if (type === "superMan") {
      return (
        <div className="div-img">
          <img
            src={backgroundTown}
            alt="background"
            className="backgroundSuper"
          />
          <img src={imgSuper} alt="superman" className="imgSuper" />
          <p className="pSuper">{text}</p>
        </div>
      );
    } else {
      return (
        <div className="div-img">
          <img
            src={backgroundCity}
            alt="background"
            className="backgroundCity"
          />
          <img src={imgSpider} alt="imgSpiderMan" className="imgSpider" />
          <img src={logoSpider} alt="logoSpider" className="logoSpider" />
          <p className="pSpider">{text}</p>
        </div>
      );
    }
  }
}
