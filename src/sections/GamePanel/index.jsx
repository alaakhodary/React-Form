import React, { Component } from "react";

import "./style.css";

import User from "../../Component/User";
import Sidebar from "../../Component/Sidebar";
import Slider from "../../Component/Slider";
import LastPlayed from "../../Component/LastPlayed";
import RecentTrophyCard from "../../Component/RecentTrophyCard";

import imgUser from "../../assets/images/user.png";
import Hogwarts from "../../assets/images/Ellipse 2.png";
import GodOfWar from "../../assets/images/GodofWars-removebg-preview.png";
import Crach from "../../assets/images/Crach.png";
import Dying from "../../assets/images/Daying.png";
import friends from "../../assets/images/FRIENDS.png";

export default class GamePanel extends Component {
  render() {
    return (
      <section className="section-games">
        <User userName="Jenny" imgageUser={imgUser} />
        <div className="flex">
          <Sidebar />
          <div className="slide-flex">
            <div className="div-title">
              <h1 className="heading-game">NEW GAMES</h1>
            </div>
            <div className="slider">
              <Slider
                type="Wars"
                text="Join in the new DLC with Kratos to learn more about him and his future."
              />
              <Slider
                type="superMan"
                text="Be part of the Suicide Squad and kill the Justice League!
              -Amanda Waller"
              />
              <Slider text="Miles Morales discovers powers from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks." />
            </div>
            <div className="secound-section">
              <div className="div1">
                <h1 className="heading-game">last played</h1>
                <div className="div-lastplayed">
                  <LastPlayed text="Hogwarts Legacy 50%" imgPlayer={GodOfWar} />
                  <LastPlayed
                    text="God Of War: Ragnarök 72.5%"
                    imgPlayer={GodOfWar}
                  />
                  <LastPlayed
                    text="Crash Bandicoot N. Sane Trilogy 34%"
                    imgPlayer={Crach}
                  />
                  <LastPlayed
                    text="Dying Light 2 Stay Human 100%"
                    imgPlayer={Dying}
                  />
                </div>
              </div>
              <div className="div2">
                <h1 className="heading-game">most recent trophy</h1>
                <RecentTrophyCard
                  textHeading="perfect KILL streak You are in the 0.5% "
                  textDisc1="assassin's creed odyssey"
                  textDisc2="last played: 34 hours ago"
                />
              </div>
              <div className="div-3">
                <h1 className="friends">friends</h1>
                <div className="friendsimg">
                  <img src={friends} alt="friendsGroup" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
