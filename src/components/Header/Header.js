import React from 'react';
import { HeaderContainer } from './styled';
import { Container } from '../../assets/CSS/styled';

export default class Header extends React.Component{
  render(){
    return(
      <HeaderContainer>
        <Container style={{ display: 'flex', alignItems: 'center' }} className="container">
          {this.props.children}
        </Container>
      </HeaderContainer>
    )
  }
}