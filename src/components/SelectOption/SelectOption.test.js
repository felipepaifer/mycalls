
import React from 'react';
import { shallow } from '../../enzyme';
import SelectOption from './SelectOption';

it('selecting value', () => {
  const wrapper = shallow(<SelectOption />);

  const select = wrapper.find('.select');
  select.value = 'Rio de Janeiro';

  expect(select.value).toEqual('Rio de Janeiro');
})