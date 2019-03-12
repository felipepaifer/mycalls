import React from 'react';
import { NavigationContainer } from './styled';
import { Container } from '../../assets/CSS/styled';
import Tab from './Tab/Tab';

export default class Navigation extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Container style={{ display: 'flex', alignItems: 'center' }}>
          <Tab />
        </Container>
      </NavigationContainer>
    )
  }
}