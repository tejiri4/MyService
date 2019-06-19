// react libraries
import React from 'react';
import PropTypes from 'prop-types';

//styles
import './Button.scss';

const Button = props => {
  const { name, styles } = props;
  return (
    <div className='button-component'>
      <button className='button-component__button  fill' style={{ ...styles }}>{name}</button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string
};

export default Button;
