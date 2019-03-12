import React from 'react';
import { ProfileContainer, PictureContainer } from './styled';
import pictureUrl from './pic.jpg';

export default class Profile extends React.Component{
  render(){

    const {
      picture
    } = this.props;

    return(
      <ProfileContainer>
        <PictureContainer picture={pictureUrl}>

        </PictureContainer>
        <label>{this.props.loggedUser}</label>
      </ProfileContainer>
    )
  }
}