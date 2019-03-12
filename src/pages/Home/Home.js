import React from 'react';
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile';
import Navigation from '../../components/Navigation/Navigation';
import { BodyContainer, FlexContainer, Container, ColumnContainer } from '../../assets/CSS/styled';
import StateCallList from '../../components/StateCallList/StateCallList';
import axios from 'axios';
import Loading from '../../assets/images/loading.gif';
import Modal from '../../components/Modal/Modal';
import { TopInfoContainer, BottomInfoContainer, Info } from '../../components/Modal/styled';
import Feedback from '../../components/Feedback/Feedback';

export default class Home extends React.Component {

  state = {
    calls: [],
    loading: true,
    isModalOpen: false,
    selectedCallId: "",
    selectedCallContent: [],
    modalLoading: true,
  }

  //START - GET ALL CALLS AND UNMOUNT LOADING
  componentDidMount() {
    axios.get('/api/calls')
      .then(res => {
        this.setState({
          calls: res.data,
          loading: false,
        });
      })
  }
  //END

  //START - THIS FUNCTION RECIEVES FROM STATECALLLIST COMPONENT IF THE MODAL IS OPEN OR NOT
  handleModal = (isModalOpen) => {
    this.setState({ isModalOpen })
  }
  //END

  //START = THIS FUNCTION RECEIVES FROM STATECALLLIST COMPONENT THE SELECTED CALL ID AND MAKE
  //AN AXIOS GET FROM THE API IN ORDER TO RETRIEVE THE CORRECTED CONTENT TO DISPLAY ON THE MODAL
  handleSelectedCall = (selectedCallId) => {
    axios.get(`/api/calls/${selectedCallId}`)
      .then(res => {
        this.setState({ selectedCallContent: res.data, modalLoading: false })
      })
  }
  //END

  //START - THIS FUNCTION IS RESPONSABLE TO CLOSE TO MODAL AND TO UNMOUNT THE MODAL LOADING WHEN THE CONTENT
  //IS RENDERED
  handleCloseModal = () => {
    this.setState({ isModalOpen: false, modalLoading: true })
  }
  //END


  render() {
    //START - THIS MAP FUNCTION GET THE LOCATION FROM ALL CALLS REGISTERED AND LIST EACH STATE 
    // WITHOUT REPEATING. THIS MAKES EASY TO RENDER THE RIGHT CALLS BY STATE.
    const calls = [...new Map(this.state.calls.map(call => [call.location, call])).values()];
    //END

    let displayedCalls;

    //START - IF THERE IS NOT CALL REGISTERED A FEEDBACK WILL BE RENDERED, OTHERWISE ALL THE CALLS
    // WILL BE DISPLAYED.
    if (calls.length === 0){
      displayedCalls = <Feedback />
    } else {
      displayedCalls = (
        calls.map(call => {
          return (
            <StateCallList
              getModalState={this.handleModal}
              getSelectedCallId={this.handleSelectedCall}
              state={call.location}
              calls={this.state.calls} />
          )
        })
      )
    }
    //END

    //START - LOADING STATE IS TRUE, A LOADING WILL BE RENDERED
    if (this.state.loading) {
      return (
        <FlexContainer>
          <Header>
            <h2>My Calls <span>SAC SYSTEM</span></h2>
            <Profile loggedUser="Felipe" />
          </ Header>
          <Navigation />
          <BodyContainer>
            <Container style={{ display: 'flex' }}>
              <img src={Loading} style={{ margin: 'auto' }} />
            </Container>
          </BodyContainer>
        </FlexContainer>
      )
    }
    //END

    const selectedCall = this.state.selectedCallContent;
    let modal;

    //START - IF MODALLOADING STATE IS TRUE, A LOADING WILL BE DISPLAYED INSIDE OF THE MODAL,
    // OTHERWISE THE CONTENT WILL BE DISPLAYED.
    if (this.state.modalLoading) {
      modal = (
        <Modal
          isModalOpen={this.state.isModalOpen}
          handleClose={this.handleCloseModal}>
          <Container style={{ display: 'flex' }}>
            <img src={Loading} style={{ margin: 'auto' }} />
          </Container>
        </Modal>
      )
    } else {
      modal = (
        <Modal
          isModalOpen={this.state.isModalOpen}
          handleClose={this.handleCloseModal}>
          <TopInfoContainer>
            <Info>
              <h3>Data</h3>
              <label>{selectedCall.date}</label>
            </Info>

            <Info>
              <h3>Horário</h3>
              <label>{selectedCall.time}</label>
            </Info>

            <Info>
              <h3>Estado</h3>
              <label>{selectedCall.location}</label>
            </Info>

            <Info>
              <h3>Tipo de Chamado</h3>
              <label>{selectedCall.type}</label>
            </Info>

            <Info>
              <h3>Motivo do Chamado</h3>
              <label>{selectedCall.reason}</label>
            </Info>
          </TopInfoContainer>
          <BottomInfoContainer>
            <Info>
              <h3>Detalhes do Chamado</h3>
              <p>{selectedCall.description}</p>
            </Info>
          </BottomInfoContainer>
        </Modal>
      )
    }
    //END

    return (
      <React.Fragment>
        {modal}
        <FlexContainer>
          <Header>
            <h2>My Calls <span>SAC SYSTEM</span></h2>
            <Profile loggedUser="Felipe" />
          </Header>
          <Navigation />
          <BodyContainer>
            <Container>
              <ColumnContainer>
                {displayedCalls}
              </ColumnContainer>
            </Container>
          </BodyContainer>
        </FlexContainer>
      </React.Fragment>
    )
  }
}