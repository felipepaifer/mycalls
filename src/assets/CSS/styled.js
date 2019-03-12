import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 2em;
  box-sizing: border-box;
`;

export const BodyContainer = styled.div`
  width: 100%;
  margin-top: 140px;
  padding: 7vh 0;
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 50vh;

  svg{
    width: 40%;
    fill: #ccc;
    margin: 0 auto;
    display: flex;
  }

  h4{
    color: #ccc;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
  }

  a{
    color: #3697ef;
    padding: 1em;
    text-transform: uppercase;
    font-size: 12px;
    border: 1px solid #3697ef;
    transition: color .4s ease, background-color .4s ease;
    cursor: pointer;
    text-decoration: none;

    &:hover{
      color: white;
      background-color: #3697ef;
    }
  }
`;