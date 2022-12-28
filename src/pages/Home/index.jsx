import React, { Component } from "react";
import Login from "../../sections/Login";
import SignUpBefore from "../../sections/SignUpBefore";

export default class Home extends Component {
  render() {
    return (
      <>
        {/* <SignUpBefore /> */}
        <Login />
      </>
    );
  }
}
