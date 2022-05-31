import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Nav">
      <ul>
        <li>
          <a href="#">
            <img className="small" src="images/Group 2.png" alt="" srcset="" />
          </a>
        </li>
        <div>
          <li>
            <a href="#">Graphics</a>
          </li>
          <li>
            <a href="#">
              <button>CONNECT WALLET</button>
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
