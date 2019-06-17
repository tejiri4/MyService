// react libraries
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './SideNav.scss';

// fixtures
import { navArray } from '../../pages/Profile/fixtures';

const SideNav = props => {
  const { classes } = props;

  const renderSideNavDetails = navDetail => (
    <div className='side-nav-component__circle shadow' key={navDetail.key} >
      <div className='label'>{navDetail.name}</div>
    </div>
  );

  return (
    <div className={`side-nav-component${classes}`}>
      {
        navArray.map(navDetail => renderSideNavDetails(navDetail))
      }
    </div>
  );
};

SideNav.propTypes = {
  classes: PropTypes.string
};

export default SideNav;
