import React from "react";
import "./style.css";

// exports tile structure for display on the Gallery page

function Tile() {
  return (
    <div className="tile">
      <img src="../../assets/images/placeholder-profile.jpg" />
      <a href="#" target="_blank">
        <button className="tile-btn">Site</button>
      </a>
    </div>
  );
}

export default Tile;
