import React, { Component } from "react";
import comma from "../../assets/images/comma.png";
import commas from "../../assets/images/commas.png";
import arrow from "../../assets/images/arrow.png";
import Container from "../../Component/Container";
import "./style.css";

export default class Content extends Component {
  render() {
    const { details, name, type } = this.props;
    if (type === "detial") {
      return (
        <article className="artical-part">
          <Container>
            <div className="img-comma">
              <img src={comma} alt="comma" />
            </div>
            <p className="details">{details}</p>
            <h1 className="name">{name}</h1>
            <div className="img-arrow">
              <img src={arrow} alt="arrow" />
            </div>
          </Container>
        </article>
      );
    } else {
      return (
        <article className="artical-part">
          <Container>
            <div className="img-comma">
              <img src={commas} alt="comma" />
            </div>
            <p className="detail">{details}</p>
            <h1 className="names">{name}</h1>
            <div className="img-arrow">
              <img src={arrow} alt="arrow" />
            </div>
          </Container>
        </article>
      );
    }
  }
}
