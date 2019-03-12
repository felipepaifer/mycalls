import React from 'react';
import { ModalFullContainer, ModalContainer, ModalHeader, ModalBody, Overlay } from './styled';
import ReactSVG from 'react-svg';
import CloseIcon from './close.svg';

export default class Modal extends React.Component {

  state = {
    open: this.props.isModalOpen,
  }
  
  render() {

    const {
      children,
    } = this.props;

    if (this.props.isModalOpen){
      return (
        <ModalFullContainer isModalOpen={this.props.open}>
          <Overlay onClick={this.props.handleClose} />
          <ModalContainer>
            <ModalHeader>
              <a onClick={this.props.handleClose}><ReactSVG src={CloseIcon} /></a>
            </ModalHeader>
            <ModalBody>
              {children}
            </ModalBody>
          </ModalContainer>
        </ModalFullContainer>
      )
    } 

    return null;
    
  }
}