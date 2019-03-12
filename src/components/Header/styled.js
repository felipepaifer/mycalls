import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: #3697EF;
  position: fixed;
  z-index: 100;

  .container{
    h2{
      color: white;
      font-family: 'Roboto';

      span{
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
`;