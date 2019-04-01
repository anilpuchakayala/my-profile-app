import React from "react";
import logo from "../assets/logo.png";

const Header = props => {
  return (
    <div className="header">
      <div className="row">
        <div className="col-md-6">
          <img src={logo} alt={"logo"} />
        </div>
        <div className="col-md-6">
          <ul className="list-unstyled contact-links text-center">
            <li className="li-color">Contact: Maria Holmberg</li>
            <li className="li-color">Tel: +46 709 53 28 64</li>
            <li className="li-color">Email: Maria.holmberg@etteplan.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
