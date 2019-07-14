import React from 'react';
import { mount } from 'enzyme';
import Works from './';

describe('Works Section', () => {
  let mountWrapper;

  beforeEach(() => {
    mountWrapper = mount(<Works />);
  });

  it('should display new works when a nav bar element is clicked', () => {
    mountWrapper.find('.false').first().simulate('click');
    expect(mountWrapper.find('.active').length).toEqual(1);
  });
});
