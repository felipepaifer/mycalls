import React from 'react';
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile';
import Navigation from '../../components/Navigation/Navigation';
import { BodyContainer, FlexContainer, Container, FeedbackContainer } from '../../assets/CSS/styled';
import axios from 'axios';
import ReactSVG from 'react-svg';
import SadIcon from './sad.svg';

export default class Home extends React.Component {

  state = {
    calls: [],
    loading: true,
    isModalOpen: false,
    selectedCallId: "",
    selectedCallContent: [],
    modalLoading: true
  }

  componentDidMount() {
    axios.get('/api/calls')
      .then(res => {
        this.setState({
          calls: res.data,
          loading: false
        });
      })
  }

  handleModal = (isModalOpen) => {
    this.setState({ isModalOpen })
  }

  handleSelectedCall = (selectedCallId) => {
    console.log(selectedCallId);
    axios.get(`/api/calls/${selectedCallId}`)
      .then(res => {
        this.setState({ selectedCallContent: res.data, modalLoading: false })
      })

  }

  handleCloseModal = () => {
    this.setState({ isModalOpen: false, modalLoading: true })
  }

  render() {
    return (
      <React.Fragment>
        <FlexContainer>
          <Header>
            <h2>My Calls <span>SAC SYSTEM</span></h2>
            <Profile loggedUser="Felipe" />
          </Header>
          <Navigation />
          <BodyContainer>
            <Container>
              <FeedbackContainer>
                <ReactSVG src={SadIcon} />
                <h4>Não encontramos esta página</h4>
              </FeedbackContainer>
            </Container>
          </BodyContainer>
        </FlexContainer>
      </React.Fragment>
    )
  }
}