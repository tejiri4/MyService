// react libraries
import React from 'react';
import PropTypes from 'prop-types';

// component
import CustomizeText from '../CustomizeText/index';
import Button from '../Button/index';

// styles
import './Contact.scss';

// fixtures
import { inputTypes, contactDetails } from './fixtures';

const Contact = () => {
  const renderInput = ({ type, placeholder, key }) =>
    <input type={type} placeholder={placeholder} key={key} required />

  const renderContactDetails = ({ src, alt, header, body, key, showBorder }) => (
    <div className='sectionTwo__contact-details' key={key}>
      <div className='sectionTwo__contact-details--icon'>
        <img
          src={src}
          alt={alt} />
      </div>
      <div className='sectionTwo__contact-details--content' style={{ borderBottom: showBorder && '#EEEEEE solid 1px' }}>
        <div className='sectionTwo__contact-details--header'>{header}</div>
        <div className='sectionTwo__contact-details--body'>{body}</div>
      </div>
    </div>
  )

  return (
    <div className='contact-component'>
      <div className='contact-component__content'>
        <div className='contact-component__content form-section'>
          <div className='sectionOne'>
            <div className='sectionOne__title' >
              <CustomizeText text='Get' color='#ED42AC' />in touch
            </div>
            <form>
              <div className='sectionOne__body'>
                <div className='sectionOne__input-area'>
                  {inputTypes.map(({ type, placeholder, key }) => {
                    return renderInput({ type, placeholder, key })
                  })}
                </div>
                <div className='sectionOne__textarea'>
                  <textarea placeholder="Description" cols="30" rows="5"></textarea>
                  <Button
                    name='SUBMIT'
                    type='submit'
                    styles={{
                      width: '80px',
                      height: '30px',
                      color: '#FFF',
                      backgroundImage: `linear-gradient(to right, #FD58A4 , #ED42AC )`,
                      fontSize: "10px",
                      borderStyle: 'none'
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className='sectionTwo'>
            {contactDetails.map(({ icon, header, body, alt, showBorder }, index) => renderContactDetails({ src: icon, header, body, alt, key: index, showBorder }))}
          </div>
        </div>
        <div className='contact-component__content--footer'>
          <div className='contact-component__content--footer-left'>Copywright <img src='https://res.cloudinary.com/store-manager/image/upload/v1563276888/copyright-symbol.svg' alt='copyright' /> All rights reserved</div>
          <div className='contact-component__content--footer-right'>Made with <img src='https://res.cloudinary.com/store-manager/image/upload/v1563277145/like.svg' alt='copyright' /> by <span>Tejiri</span> </div>
        </div>
      </div>
    </div>);
}

Contact.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  key: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  header: PropTypes.string,
  body: PropTypes.string,
  showBorder: PropTypes.bool

};

export default Contact;
