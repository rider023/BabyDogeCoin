import React from "react";
import "./Congratulations.css";

function Congratulations() {
  return (
    <div className="img">
      <img src="images/Image 7.png" alt="" className="slither" />
      <div className="txt">
        <h1 className="congratulations">Congratulations</h1>
        <h4 className="subheading">No one can stop you</h4>
        <img src="images/Image 26.png" alt="" className="dogdancing" />
        <img src="images/Ellipse 24.png" alt="" className="ellipse" />
        <h5 className="coinswon">You Won</h5>

        <img src="images/Image 16.png" alt="" className="coin" />
        <h1 className="noofcoins">567</h1>
        <h5 className="rankheading">Rank</h5>
        <h1 className="rank">22</h1>
        <button className="next">Next</button>
      </div>
    </div>
  );
}

export default Congratulations;
