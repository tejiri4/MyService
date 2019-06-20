// react libraries
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './CustomizeText.scss';

const CustomizeText = ({ text, color }) => {
  return (
    <div className='customize-text-component'>
      <div className='customize-text-component__text' style={{ color }}>
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
  color: PropTypes.string
}

export default CustomizeText;

