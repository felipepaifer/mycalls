import styled from 'styled-components';

export const TabsList = styled.ul`
  display: flex;
  padding-left: 0;

  li{
    list-style: none;
    margin-right: 2em;
    

    a{
      text-decoration: none;
      color: #9e9e9e;
      cursor: pointer;
      transition: color .4s ease;
    }
  }
`;