import React from 'react';
import Profile from './Profile';

it('render logged user name', () => {

  const loggedUser = "Felipe"

  const component = <Profile loggedUser={loggedUser} />

  expect(component.props.loggedUser).toEqual("Felipe");
})