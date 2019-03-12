import styled from 'styled-components';

export const SelectContainer = styled.div`
  width: 100%;
  max-width: 15em;
  margin-right: 4%;
  margin-bottom: 2vh;

  @media only screen and (max-width: 712px){
    max-width: 25em;
    margin-top: 2vh;
  }

  label{
    color: #3697ef;
    font-size: 14px;
  }
  
  .select{
    margin-top: 2vh;
    div{
      outline: none !important;
      box-shadow: none !important;
      border-radius: 0 !important;
      font-size: 14px;
    }

    div:first-child{
      border-color: #3697ef;

      &:nth-child(1){
        &:nth-child(1){ 
          color: #3697ef;
        }
      }

      &:last-child{
        span{
          background-color: #3697ef;
        }
        div{
          svg{
            fill: #3697ef !important;
          }
        }
      }
    }
  }
`;
