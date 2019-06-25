// react libraries
import React, { useState } from 'react';

// component
import NavBar from '../../component/NavBar';
import SideNav from '../../component/SideNav';
import Logo from '../../component/Logo';
import Hamburger from '../../component/Hamburger';
import Home from '../../component/Home';
import AboutMe from '../../component/AboutMe';
import Services from '../../component/Services';
import Skills from '../../component/Skills';

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
      <AboutMe />
      <Services />
      <Skills />
      <SideNav classes={`${showSideNav ? '' : '--hide'}`} />
    </div>
  );
};

export default ProfilePage;
