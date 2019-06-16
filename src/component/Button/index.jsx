// react libraries
import React from 'react';
import PropTypes from 'prop-types';

//styles
import './Button.scss';

const Button = props => {
  const { width, height, startColor, endColor, color, name } = props;
  const buttonstyles = {
    width,
    height,
    backgroundImage: `linear-gradient(to right, ${startColor} , ${endColor} )`,
    color
  };
  return (
    <div className='button-component'>
      <button className='button-component__button' style={buttonstyles}>{name}</button>
    </div>
  );
};

Button.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  startColor: PropTypes.string,
  endColor: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string
};

export default Button;
