import React from 'react';
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile';
import Navigation from '../../components/Navigation/Navigation';
import { BodyContainer, FlexContainer, Container, ColumnContainer } from '../../assets/CSS/styled';
import NewForm from '../../components/NewForm/NewForm';

export default class CallRegistry extends React.Component{

  render(){
    return(
      <FlexContainer>
        <Header>
          <h2>My Calls <span>SAC SYSTEM</span></h2>
          <Profile loggedUser="Felipe" />
        </Header>
        <Navigation />
        <BodyContainer>
          <Container>
            <ColumnContainer>
              <NewForm />
            </ColumnContainer>
          </Container>
        </BodyContainer>
      </FlexContainer>
    )
  }
}