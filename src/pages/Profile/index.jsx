// react libraries
import React, { useState } from 'react';

// component
import NavBar from '../../component/NavBar/index';
import SideNav from '../../component/SideNav';
import Logo from '../../component/Logo/index';
import Hamburger from '../../component/Hamburger/index';
import Home from '../../component/Home/index';

// fixtures
import { navArray } from './fixtures';

// styles
import './Profile.scss';

const ProfilePage = () => {

  const [showSideNav, setshowSideNav] = useState(false);

  const handleHamburgerClick = () => setshowSideNav(!showSideNav);

  return (
    <div className='profile-component'>
      <div className='header'>
        <Logo />
        <Hamburger
          handleHamburgerClick={handleHamburgerClick}
        />
        <NavBar
          navArray={navArray}
          showButton
        />
      </div>
      <div className='content'>
        <Home />
      </div>
      <SideNav classes={`${showSideNav ? '' : '--hide'}`} />
    </div>
  );
};

export default ProfilePage;
