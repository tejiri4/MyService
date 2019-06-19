// react libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// component
import Button from '../Button/index';

// scss
import './NavBar.scss';

const NavBar = props => {
  const [activeNavBar, setActiveNavBar] = useState('home');

  const { navArray, showButton } = props;

  const handleNavLinkClick = key => () => setActiveNavBar(key);

  const navLink = navDetail => (
    <li key={navDetail.key}>
      <span onClick={handleNavLinkClick(navDetail.key)} className={`${navDetail.key === activeNavBar && 'active'}`}>
        {navDetail.name}
      </span>
    </li>
  );

  return (
    <div className='nav-bar-component'>
      <nav >
        <ul>
          {navArray.map(navDetail => {
            return navLink(navDetail);
          })}
        </ul>
        {
          showButton && <Button
            name='Hire'
            width='100px'
            height='40px'
            color='#1367fb'
            borderColor='#1367fb'
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
