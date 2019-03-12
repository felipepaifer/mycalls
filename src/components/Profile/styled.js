import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 auto;
  width: 100%;
  max-width: 30%;
  justify-content: flex-end;

  label{
    margin-left: 6%;
    color: white;
  }
`;

export const PictureContainer = styled.div`
  width: 35px;
  height: 35px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  border-radius: 50%;
  background-color: grey;
  background-image: url(${props => props.picture});
`;

