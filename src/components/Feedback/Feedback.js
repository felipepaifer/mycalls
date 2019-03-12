import React from 'react';
import { Link } from 'react-router-dom'; 
import { FeedbackContainer } from '../../assets/CSS/styled';
import ReactSVG from 'react-svg';
import CallIcon from './call.svg';

export default class Feedback extends React.Component{
  render(){
    return(
      <FeedbackContainer>
        <ReactSVG src={CallIcon} />
        <h4>Você ainda não tem chamados registrados</h4>
        <Link to="/registro">Registrar Chamado</Link>
      </FeedbackContainer>
    )
  }
}