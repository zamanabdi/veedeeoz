import React from "react";
import Logo from "../../assets/222.png";
import { FaHamburger } from "react-icons/fa";
import "./header.scss";

const Header = () => {
  return (
    <header className="main-header-container">
      <div className="logo-wrapper">
        <img src={Logo} width={"200px"} />
      </div>
      <div className="options">

          <div className="sub-options">
          <span>Home</span>
          <span>Trending Videos</span>
          <span>Movies & TV Shows</span>
          <span>Chat Room</span>
          <span>Login</span>
          </div>
          
          <div className="ham-icon">
          <FaHamburger/>
          </div>

          
      

      </div>
    </header>
  );
};

export default Header;
