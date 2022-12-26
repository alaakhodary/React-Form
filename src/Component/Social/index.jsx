import React, { Component } from "react";
import img_google from "../../assets/images/google.svg";
import img_twitter from "../../assets/images/twitter.png";
import img_linkedin from "../../assets/images/linkedin.png";
import img_githup from "../../assets/images/githup.png";
import "./style.css";

export default class Social extends Component {
  render() {
    return (
      <section>
        <div>
          <ul className="list">
            <li className="list-item">
              <a href="/#">
                <img src={img_google} alt="" />
              </a>
            </li>
            <li className="list-item">
              <a href="/#">
                <img src={img_twitter} alt="" />
              </a>
            </li>
            <li className="list-item">
              <a href="/#">
                <img src={img_linkedin} alt="" />
              </a>
            </li>
            <li className="list-item">
              <a href="/#">
                <img src={img_githup} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
