import React from 'react';
import Header from './Header';

it('testing children rendering', () => {
  let component = <Header>My Calls</Header> 
  expect(component.props.children).toBe('My Calls'); 
});
