import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  max-width: 60em;
  padding: 5vh;
  background-color: white;
  margin: auto;
  display: flex;
  box-sizing: border-box;
  flex-flow: row wrap;
  box-shadow: 1px 1px 8px #eee;

  @media only screen and (max-width: 712px){
    padding: 5vh 1vh;
  }
`;

export const FirstColumn = styled.div`
  display: flex;
  flex: 1 1 60em;
  padding: 0 1em;
  flex-flow: row wrap;
  box-sizing: border-box;

  @media only screen and (max-width: 800px){
    flex: 1 1 20em;
  }
`;

export const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 12em;
  padding: 0 1em;
  width: 100%;
  margin-top: 4vh;

  @media only screen and (max-width: 800px){
    flex: 1 1 23em;
    margin-top: 4vh;
  }

  label{
    color: #3697ef;
    font-size: 14px;
  }

  textarea{
    border: 1px solid #3697ef;
    height: 20vh;
    padding: 1em;
    margin-top: 2vh;
    color: #3697ef;
    font-family: 'Roboto';
    outline: none;
    width: 100% !important;
    box-sizing: border-box;
    margin-bottom: 4vh;

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #3697ef;
    opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #3697ef;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: #3697ef;
    }
  }

  button{
    width: 100%;
    max-width: 10em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto 0 0 auto;
    background-color: transparent;
    border: 1px solid #3697ef;
    padding: 1em;
    color: #3697ef;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 14px;
    transition: background-color .4s ease, color .4s ease;

    @media only screen and (max-width: 800px){
      margin-top: 4vh;
    }

    @media only screen and (max-width: 480px){
      max-width: 30em;
    }

    &:hover{
      background-color: #3697ef;
      color: white;
    }
  }

  
`;
