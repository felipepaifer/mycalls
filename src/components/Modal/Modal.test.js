import React from 'react';
import { shallow } from '../../enzyme';
import Modal from './Modal';

it('render children', () => {
  const component = <Modal>modal content</Modal>
  expect(component.props.children).toBe('modal content'); 
});

it('open modal', () => {
  const wrapper = shallow(<Modal isModalOpen={true}  />);
  expect(wrapper.state().open).toEqual(true);
})

it('close modal', () => {
  const wrapper = shallow(<Modal isModalOpen={false}  />);
  expect(wrapper.state().open).toEqual(false);
})