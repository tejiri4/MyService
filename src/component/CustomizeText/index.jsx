// react libraries
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './CustomizeText.scss';

const CustomizeText = ({ text, color, colorText }) => {
  return (
    <div className='customize-text-component'>
      <div className='customize-text-component__text' style={{ color: colorText && color }}>
        {text}
      </div>
      <div className='customize-text-component__underline'>
        <div style={{ backgroundColor: color }}></div>
        <div style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
}

CustomizeText.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  colorText: PropTypes.bool
}

export default CustomizeText;

