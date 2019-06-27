import React from 'react';
import Person from './Person';
import { shallow } from 'enzyme'

describe('Person', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Person />)
    expect(wrapper).toMatchSnapshot();
  })
})