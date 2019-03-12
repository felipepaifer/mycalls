import styled from 'styled-components';

export const StateName = styled.label`
  color: #1C7FD9;
  font-size: 16px;
`;

export const StateTable = styled.div`
  width: 100%;
  background-color: white; 
  margin-top: 4vh;
  box-shadow: 1px 1px 8px #eee;

  @media only screen and (max-width: 801px){
    .call-type{
      display: none;
    }

    .call-data-type{
      display:none;
    }
  }

   @media only screen and (max-width: 684px){
    .call-reason{
      display: none;
    }

    .call-data-reason{
      display:none;
    }
  }

    @media only screen and (max-width: 566px){
    .call-time{
      display: none;
    }

    .call-data-time{
      display:none;
    }
  }

   @media only screen and (max-width: 449px){
    .call-location{
      display: none;
    }

    .call-data-location{
      display:none;
    }
  }
`;

export const StateListContainer = styled.div`
  width: 100%;

  &:not(:first-child){
    margin-top: 10vh;
  }
`;


export const TableHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  padding: 1em;
`;

export const HeaderData = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  h3{
      font-size: 14px;
      font-weight: 400;
      padding: 0 1em;
      box-sizing: border-box;
      color: #1C7FD9;
      text-align: center;
  }
`;

export const TableBody = styled.div`
  display: flex;
  padding: 1em;
  
  &:not(:last-child){
    border-bottom: 1px solid #f9f9f9;
  }
`;

export const BodyData = styled.div`
  display: flex;
  width: 100%;
  

  label {
      font-size: 12px;
      font-weight: 400;
      padding: 1em;
      box-sizing: border-box;
      text-align: center;
      color: #9e9e9e;
  }

  a{
    border: 1px solid #3697ef;
    padding: .4em 1em;
    cursor: pointer;
    color: #3697ef;
    transition: background-color .4s ease, color .4s ease;

    &:hover{
      background-color: #3697ef;
      color: white;
    }
  }
`;