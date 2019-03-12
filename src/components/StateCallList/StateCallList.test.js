import React from 'react';
import StateCallList from './StateCallList';

it('render state name', () => {
  const component = <StateCallList state="Rio de Janeiro"  />;

  expect(component.props.state).toEqual("Rio de Janeiro");

});

it('render calls list', () => {

  let calls = [
    {
      date: "04/10/2018",
      time: "15:33",
      location: "Rio de Janeiro",
      type: "Chat",
      reason: "Elogio",
      description: "Muito legal"
    }
  ];

  const component = <StateCallList calls={calls} />
  expect(component.props.calls.length).toEqual(1);
  
})