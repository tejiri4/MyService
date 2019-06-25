// react libraries
import React from 'react';

// component
import CustomizeText from '../CustomizeText/index';
import SkillCard from '../SkillCard/index';

// styles
import './Skills.scss';

// fixtures
import { skillsArray } from './fixtures';

const Skills = () => {
  return (
    <div className='skills-component'>
      <div className='skills-component__child  one' />
      <div className='skills-component__child  two'>
        <div className='skills-component__child--content'>
          <div>
            <div className='skills-component--header'>What <CustomizeText text='Skills' color='#7E7BB9' /> i have</div>
            <div className='skills-component--description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id elit at erat convallis cursus a ac quam. Curabitur ullamcorper augue in ullamcorper ornare. Curabitur lacinia risus vitae ligula porttitor maximus. Etiam volutpat dictum libero a lobortis. Pellentesque suscipit sagittis odio vel finibus. Curabitur at placerat felis.
          </div>
          </div>
          <div>
            {
              skillsArray.map(({ skill, percentage, color}, index) =>  <SkillCard skill={skill} percentage={percentage} color={color} key={index} />)
            }
            </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
