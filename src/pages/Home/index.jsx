import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import { LogInWithRoute } from "../../sections/Login";
import SignUpBefore from "../../sections/SignUpBefore";
import GamePanel from "../../sections/GamePanel";

export default class Home extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<LogInWithRoute />} />
          <Route path="/signup" element={<SignUpBefore />} />
          <Route path="/GamePanel" element={<GamePanel />} />
          <Route path="*" element={<h1>Erorr 404</h1>} />
        </Routes>
      </>
    );
  }
}
