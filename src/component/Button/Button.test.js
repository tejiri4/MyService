// react libraries
import React from 'react';

// third part libraries
import { shallow } from 'enzyme';

// component
import Button from './';

describe('Button component', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      width: '100px',
      height: '40px',
      startColor: 'white',
      endColor: 'white',
      color: 'green'
    };
    wrapper = shallow(<Button {...props} />);
  });

  it('renders the button component without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

