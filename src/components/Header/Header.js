import React from "react";
import Navbar from "./Navbar";
import "./Header.css";
// import LOGO from "../../images/logo-2.png";

const Header = ({
  shouldShowForm,
  setShouldShowForm,
  shouldShowChart,
  setShouldShowChart,
  shouldShowTotal,
  setShouldShowTotal,
}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__text">
          <span>ACTIVE</span>LIFE
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
