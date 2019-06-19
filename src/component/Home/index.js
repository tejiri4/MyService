/* eslint-disable react/no-unescaped-entities */
// react libraries
import React from 'react';

// styles
import './Home.scss';

// fixtures
import { socialMediaInfos } from './fixtures';

const Home = () => {
  const socialMediaIconCSS = {
    width: '30px',
    height: '30px',
    marginLeft: '5px'
  }

  const profilePhotoCSS = {
    width: '300px',
    height: '300px',
  }

  const renderSocialMediaIcon = (src, alt, key) =>
    <img src={`${src}`} alt={`${alt}`} key={`${key}`} style={socialMediaIconCSS} />

  return (
    <div className='home'>
      <div className='home__content'>
        <div className='home__greeting'>Hello, I'm</div>
        <div className='home__name'>Tonathon Doe</div>
        <div className='home__role'>Professional Web Designer & Developer</div>
        <div>
          {socialMediaInfos.map(({ src, alt, key }) => renderSocialMediaIcon(src, alt, key))}
        </div>
      </div>
      <div className='profile-photo'>
        <img
          src='https://res.cloudinary.com/store-manager/image/upload/v1560944412/undraw_profile_6l1l.svg'
          alt='profile'
          style={profilePhotoCSS}
        />
      </div>
    </div>
  );
}

export default Home;
