// react libraries
import React, { useState } from "react";
import PropTypes from "prop-types";

// component
import Button from "../Button/index";
import Logo from "../Logo";

// scss
import "./NavBar.scss";

const NavBar = props => {
  const [activeNavBar, setActiveNavBar] = useState("home");

  const { navArray, showButton } = props;

  const handleNavLinkClick = key => () => setActiveNavBar(key);

  const navLink = navDetail => (
    <li key={navDetail.key}>
      <span onClick={handleNavLinkClick(navDetail.key)} className={`${navDetail.key === activeNavBar && "active"}`}>
        {navDetail.name}
      </span>
    </li>
  );

  return (
    <div className="nav-bar-component">
      <Logo />
      <nav>
        <ul>
          {navArray.map(navDetail => {
            return navLink(navDetail);
          })}
        </ul>
        {
          showButton && <Button
            name="HIRE ME"
            width="100px"
            height="40px"
            startColor="#4D62D3"
            endColor="#2741d1"
            color="white"
          />
        }
      </nav>
    </div>);
};

NavBar.propTypes = {
  showButton: PropTypes.bool,
  navArray: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      key: PropTypes.string
    }),
  ),
};

export default NavBar;
