import styled from 'styled-components';

export const ModalFullContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: fixed; 
  justify-content: center;
  align-items: center;
  z-index: 101;
`;

export const ModalContainer = styled.div`
  margin: auto;
  width: 100%;
  max-width: 50em;
  padding: 2em;
  box-sizing: border-box;
  box-shadow: 1px 1px 8px #a8a8a8;
  background-color: white;
  z-index: 102; 
  overflow: auto;

   @media only screen and (min-width: 300px) and (max-width: 810px){
    height: 100vh;
  }
`; 

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  a{
    text-align: right;
    cursor: pointer;
    svg{
      width: 6%;
      fill: #ccc;
      transition: fill .4s ease;

      &:hover{
        fill: #1C7FD9;
      }
    }
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #00000054;
  opacity: .7;
`;

export const TopInfoContainer = styled.div`
  display: flex; 
  border-bottom: 1px solid #eee;
  padding-bottom: 4vh;
  box-sizing: border-box;
  flex-flow: row wrap;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

   @media only screen and (min-width: 300px) and (max-width: 810px){
    margin-bottom: 2vh;
  }

  h3{
    color: rgb(28, 127, 217);
    font-size: 16px;
    font-weight: 400;
  }
 
  label,p{
    color: #9e9e9e;
    font-size: 14px;
  }

  p{
    margin:0;
    line-height: 1.7em;
  }

  &:not(:last-child){
    margin-right: 2em;
  }
`;

export const BottomInfoContainer = styled.div`
  display: flex;
  margin-top: 2vh;
`;