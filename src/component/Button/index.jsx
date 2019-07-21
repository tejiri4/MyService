// react libraries
import React from 'react';
import PropTypes from 'prop-types';

//styles
import './Button.scss';

const Button = props => {
  const { name, styles, type } = props;
  return (
    <div className='button-component'>
      <button className='button-component__button  fill' type={type} style={{ ...styles }}>{name}</button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  styles: PropTypes.object,
  type: PropTypes.string
};

export default Button;
