import React from 'react';
import { shallow } from '../../../enzyme';
import Tab from './Tab';

it('simulate click event on tab Chamados', () => {
  const wrapper = shallow(<Tab />);
  const firstTab = wrapper.find('li').at(0); 

  firstTab.simulate('click');
  expect(wrapper.state().clickedTab).toEqual('Chamados');
});