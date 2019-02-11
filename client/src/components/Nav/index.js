import React from "react";
import "./style.css";

function Nav() {
  return (
    <div>
      <nav className="cmc-nav navbar navbar-sticky navbar-expand-lg navbar-light cmc-nav navbar-default">
        <a className="navbar-brand" href="/">
          <img className="logo" src="../../assets/logo/logo.png" />
        </a>
      </nav>
    </div>
  );
}

export default Nav;
