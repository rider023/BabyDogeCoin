import React from "react";
import "./Game.css";

function Game() {
  return (
    <div className="bg">
      <img src="images/Image 7.png" alt="" className="slither" />
      <div className="info">
        <p className="heading">ENTER THE GAME</p>
        <img src="/images/Line 1.png" alt="" className="line" />
        <img src="/images/Group 24.png" alt="" className="ice" />
        <img src="/images/Group 25.png" alt="" className="fire" />
        <img src="/images/Line 1.png" alt="" className="line" />
        <p className="ammount">YOUR AMOUNT</p>
        <input type="text" className="inputammount" />{" "}
        <button className="save">SAVE</button>
        <p className="ammount">USERNAME</p>
        <input type="text" placeholder="ABCD" className="inputusername" />
        <button className="playnow"> PLAY NOW</button>
      </div>
    </div>
  );
}

export default Game;
