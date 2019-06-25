// react libraries
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './SkillCard.scss';

const SkillCard = ({ skill, percentage, color, index }) => {
  return (
    <div className='skill-card-component' key={index}>
      <div className='skill-card-component__details' style={{ color }}>
        <div>{skill}</div>
        <div>{percentage}</div>
      </div>
      <div className='skill-card-component__percentage'>
        <div className='skill-card-component__percentage--show' style={{ backgroundColor: color, width: percentage }}></div>
      </div>
    </div>
  );
}

SkillCard.propTypes = {
  skill: PropTypes.string,
  percentage: PropTypes.string,
  color: PropTypes.string,
  index: PropTypes.number
}


export default SkillCard;
