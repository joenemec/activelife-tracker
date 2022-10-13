import React, { useContext } from "react";
import DisplayContext from "../../DisplayContext";
import "./Navbar.css";

const Navbar = () => {
  const { addDisplayChart, addDisplayForm, addDisplayHistory } =
    useContext(DisplayContext);

  return (
    <nav className="navbar">
      <ul className="container">
        <li className="icon icon__chart" onClick={addDisplayChart}>
          <ion-icon name="pie-chart-outline"></ion-icon>
        </li>
        <li className="icon icon__add" onClick={addDisplayForm}>
          <ion-icon name="add"></ion-icon>
        </li>
        <li className="icon icon__list" onClick={addDisplayHistory}>
          <ion-icon name="file-tray-full-outline"></ion-icon>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
