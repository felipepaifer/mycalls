import React from 'react';
import { Redirect } from 'react-router-dom';
import { FormContainer, FirstColumn, SecondColumn } from './styled';
import SelectOption from '../SelectOption/SelectOption';
import axios from 'axios';
import Loading from '../../assets/images/loading.gif';


export default class NewForm extends React.Component {

  state = {
    locations: [],
    loading: true,
    date: "",
    time: "",
    location: "",
    type: "",
    reason: "",
    description: "",
    isFormSubmited: false
  }

  //GET STATES LIST FROM EXTERNAL API 
  componentDidMount() {
    axios.get('http://www.geonames.org/childrenJSON?geonameId=3469034')
      .then(res => {
        this.setState({ locations: res.data, loading: false })
      })
  }

  // GET CALL DESCRIPTION VALUE 
  handleChange = (e) => this.setState({ description: e.target.value })

  // GET SELECTED VALUE FROM SELECTOPTION COMPONENT
  handleSelect = type => selected => this.setState({ [type]: selected.value });

  //CREATING NEW CALL REGISTRATION
  handleSubmit = (e) => {
    e.preventDefault();

    // GET CURRENT DATE
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    const currentDate = dd + '/' + mm + '/' + yyyy;

    //GET CURRENT TIME
    const time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if (hours < 10){
      hours = '0' + hours
    }

    if (minutes < 10){
      minutes = '0' + minutes
    }
    
    if(seconds < 10){
      seconds = '0' + seconds
    }

    const currrentTime = hours + ':' + minutes + ':' + seconds;

    // POST DATA TO ENDPOINT AND CREATING A NEW CALL REGISTRATION
    axios.post('/api/calls/new', {
      date: currentDate,
      time: currrentTime,
      location: this.state.location,
      type: this.state.type,
      reason: this.state.reason,
      description: this.state.description
    })
    .then(res => {
        this.setState({ isFormSubmited: true })
    })
  }

  render() {

    if (this.state.loading) {
      return <img src={Loading} style={{ margin: 'auto' }} /> 
    }

    if (this.state.isFormSubmited){
      return <Redirect to="/" />
    }

    const states = this.state.locations.geonames.map(state => {
      return { value: state.toponymName, label: state.toponymName }
    });

    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <FirstColumn>
          <SelectOption
            selectLabel="Estado"
            options={states}
            placeholder="Selecionar"
            getSelectedItem={this.handleSelect('location')}
          />

          <SelectOption
            selectLabel="Tipo do Chamado"
            placeholder="Selecionar"
            options={
              [
                { value: 'Telefone', label: 'Telefone' },
                { value: 'Chat', label: 'Chat' },
                { value: 'Email', label: 'Email' }
              ]
            }
            getSelectedItem={this.handleSelect('type')}
          />

          <SelectOption
            selectLabel="Motivo do Chamado"
            placeholder="Selecionar"
            options={
              [
                { value: 'Elogios', label: 'Elogios' },
                { value: 'Dúvidas', label: 'Dúvidas' },
                { value: 'Sugestões', label: 'Sugestões' }
              ]
            }
            getSelectedItem={this.handleSelect('reason')}
          />
        </FirstColumn>
        <SecondColumn>
          <label>Detalhes do Chamado</label>
          <textarea
            value={this.state.description}
            required
            onChange={this.handleChange}
            placeholder="Descreva aqui detalhes da sua conversa com o cliente" />
          <button type="submit">Registrar</button>
        </SecondColumn>
      </FormContainer>
    )
  }
}
