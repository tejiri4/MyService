import React from 'react';
import { shallow, mount } from 'enzyme';
import ProfilePage from './index';

describe('Profile Page', () => {
  let wrapper;
  let mountWrapper;

  beforeEach(() => {
    wrapper = shallow(<ProfilePage />);
    mountWrapper = mount(<ProfilePage />);
  });

  it('renders the profile page component without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should display the side nav when the hamburger icon is clicked', () => {
    let hideSideNavElementLength = mountWrapper.find('.side-nav-component--hide').length;
    expect(hideSideNavElementLength).toEqual(1);
    mountWrapper.find('label[htmlFor="btn-1"]').simulate('click');
    hideSideNavElementLength = mountWrapper.find('.side-nav-component--hide').length;
    expect(hideSideNavElementLength).toEqual(0);
  })
});

