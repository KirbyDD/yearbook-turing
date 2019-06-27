import React from 'react';
import AddNewStudent from './AddNewStudent';
import { shallow } from 'enzyme'

describe('AddNewStudent', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<AddNewStudent staff={[]} students={[]}/>)
    expect(wrapper).toMatchSnapshot();
  })
})