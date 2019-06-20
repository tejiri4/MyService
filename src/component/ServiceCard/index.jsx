// react libraries
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './ServiceCard.scss'

const ServiceCard = ({ img, title, description, index }) => {
  return (
    <div className='service-card-component active' key={index}>
      <div><img src={img} alt='service-icon'/></div>
      <div className='service-card-component__title'>{title}</div>
      <div className='service-card-component__description'>{description}</div>
    </div>
  );
}

ServiceCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  index: PropTypes.string
}

export default ServiceCard;

