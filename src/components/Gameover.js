import React from "react";
import "./Gameover.css";

function Gameover() {
  return (
    <div className="img">
      <img src="images/Image 7.png" alt="" className="slither" />

      <div className="main">
        <div className="left">
          <h4 className="overview">OVERVIEW</h4>
          <h5 className="congrats">Congratulations!</h5>
          <img src="images/Image 16.png" alt="" className="coins" />
          <h1 className="score">567</h1>
          <img src="images/Image 18.png" alt="" className="tilteddog" />
          <img src="images/Group 34.png" alt="" className="firework_2" />
          <img src="images/Group 32.png" alt="" className="firework_1" />
          <h4 className="usern">Alex1234</h4>

          <img src="images/Ellipse 2.png" alt="" className="circle" />
          <span className="circlerank">rank:</span>
          <p className="circleno"> 17</p>

          <div className="progressbar"></div>
          <div className="progress"></div>
        </div>
        <div className="right">
          <h4 className="stats">STATS</h4>
          <h5 className="survival">Survival Time</h5>
          <h1 className="time">6m 42s</h1>
          <h5 className="players">Players Killed</h5>
          <h1 className="killed">8</h1>
          <h5 className="tokens">Token Eatens</h5>
          <h1 className="eaten">102</h1>
        </div>
        <button className="transfer">Transfer Tokens</button>
        <button className="again">Play again</button>
        <button className="exit">Exit</button>
      </div>
    </div>
  );
}

export default Gameover;
