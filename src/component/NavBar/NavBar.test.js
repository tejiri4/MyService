// react libraries
import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './';
import { navArray } from '../../pages/Profile/fixtures';

describe('NavBar component', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      navArray,
      showButton: true,
      selectedNavElement: () => {}
    };
    wrapper = shallow(<NavBar {...props} />);
  });

  it('renders the NavBar component without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleNavLinkClick event handler', () => {
    const navlink = wrapper.find('span').last();
    navlink.simulate('click');
    expect(wrapper.find('.active').length).toEqual(1);
  });
});

