// react libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// component
import Button from '../Button/index';

// scss
import './NavBar.scss';

const NavBar = props => {
  const [activeNavBar, setActiveNavBar] = useState(props.active);

  const { navArray, showButton, showTips, fontSize, marginRight, selectedNavElement, workLength } = props;


  const handleNavLinkClick = key => () => {
    setActiveNavBar(key)
    showTips && selectedNavElement(key)
  };


  const renderTips = (value, key) => (<div className={`tips ${key === activeNavBar ? 'show' : 'hide'}`}>{value}</div>);


  const navLink = navDetail => (
    <li key={navDetail.key} style={{ marginRight: marginRight }}>
      {showTips && renderTips(workLength, navDetail.key)}
      <span onClick={handleNavLinkClick(navDetail.key)} className={`${navDetail.key === activeNavBar && 'active'}`} style={{ fontSize: fontSize }}>
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
            styles={
              {
                width: '100px',
                height: '40px',
                color: '#1367fb',
                borderColor: '#1367fb'
              }
            }
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
  showTips: PropTypes.bool, 
  fontSize: PropTypes.string,
  marginRight: PropTypes.string,
  active: PropTypes.string,
  workLength: PropTypes.number,
  selectedNavElement: PropTypes.func
};

export default NavBar;
