// react libraries
import React from 'react';

// components
import Button from '../Button/index';
import CustomizeText from '../CustomizeText/index';

// styles
import './AboutMe.scss';

const AboutMe = () => {
  return (
    <div className='about-me-component'>
      <div className='about-me-component__content'>
        <div>
          <div className='about-me-component__content--header'>Who <CustomizeText text='i am' color='#68c5d9' /></div>
          <div className='about-me-component__content--greetings'>Hello everyone,<span>My name is Tonathon Doe</span></div>
          <div className='about-me-component__content--description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id elit at erat convallis cursus a ac quam. Curabitur ullamcorper augue in ullamcorper ornare. Curabitur lacinia risus vitae ligula porttitor maximus. Etiam volutpat dictum libero a lobortis. Pellentesque suscipit sagittis odio vel finibus. Curabitur at placerat felis.
          </div>
          <div>
            <Button
              name='DOWNLOAD RESUME'
              styles={{
                width: '200px',
                height: '35px',
                color: '#FFF',
                backgroundImage: `linear-gradient(to right, #38dfd0 , #36b5d0 )`,
                fontSize: "10px",
                borderStyle: 'none'
              }}
            />
          </div>
        </div>
        <div>
          <img src='https://res.cloudinary.com/store-manager/image/upload/v1561025197/undraw_profile_pic_ic5t.svg' alt='profile'/>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
