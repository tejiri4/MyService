import React from 'react';
import { shallow } from 'enzyme';
import SideNav from './';

describe('NavBar component', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      classes: ''
    };
    wrapper = shallow(<SideNav {...props} />);
  });

  it('renders the SideNav component without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});