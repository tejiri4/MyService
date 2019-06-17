// react libraries
import React from 'react';

// styles
import './Hamburger.scss';

const Hamburger = props => (
  <div className='hamburger-component'>
    <input id='btn-1' type='checkbox' />
    <label htmlFor='btn-1' onClick={props.handleHamburgerClick}>
      <span className='hamburger'>
        <span className='line line--1' />
        <span className='line line--2' />
        <span className='line line--3' />
        <span className='cross' />
      </span>
    </label>
  </div>
);

export default Hamburger;
