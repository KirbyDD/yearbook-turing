import React from 'react';
import Cohort from './Cohort';
import { shallow } from 'enzyme'

describe('Cohort', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Cohort staff={[]} students={[]}/>)
    expect(wrapper).toMatchSnapshot();
  })
})