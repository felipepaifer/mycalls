import React from 'react';
import { StateName, StateTable, StateListContainer,TableHeader, TableBody, HeaderData, 
  BodyData } from './styled';

export default class StateCallList extends React.Component {

  state = {
    isModalOpen: false, 
    call: [],
    selectedCall: ""
  }

  //START - THIS FUNCTION SEND TO THE PARENT COMPONENT THE SELECTED CALL ID AND IF THE MODAL IS OPEN OR NOT
  //IN ORDER TO DISPLAY THE CORRECTED CONTENT ON THE MODAL.
  handleDetails = (e) => {
    this.setState({ 
      isModalOpen: true, 
      selectedCall: e.target.getAttribute('data-call')
    }, () => {
      this.props.getModalState(this.state.isModalOpen);
      this.props.getSelectedCallId(this.state.selectedCall)
    })
  }
  //END


  render() {

    //START - CALLS GETS THE PROPS PASSED FROM STATECALLLIST PARENT COMPONENT AND FILTER THE RESULT
    //IN ORDER TO DO A MAP FUNCTION LATER AND DISPLAY ALL CALLS BY STATE
    const calls = this.props.calls.filter(call => call.location === this.props.state);
    //END

    return (
      <React.Fragment>
      <StateListContainer>
        <StateName>{this.props.state}</StateName>
        <StateTable>
          <TableHeader>
            <HeaderData className="call-date"><h3>Data</h3></HeaderData>
            <HeaderData className="call-time"><h3>Horário</h3></HeaderData>
            <HeaderData className="call-location"><h3>Estado</h3></HeaderData>
            <HeaderData className="call-type"><h3>Tipo</h3></HeaderData>
            <HeaderData className="call-reason"><h3>Motivo</h3></HeaderData>
            <HeaderData className="call-description"><h3>Detalhes</h3></HeaderData>
          </TableHeader>
          {calls.map(call => {
            return (
              <TableBody>
                <BodyData className="call-data-date"><label className="date">{call.date}</label></BodyData>  
                <BodyData className="call-data-time"><label>{call.time}</label></BodyData>
                <BodyData className="call-data-location"><label>{call.location}</label></BodyData>
                <BodyData className="call-data-type"><label>{call.type}</label></BodyData>
                <BodyData className="call-data-reason"><label>{call.reason}</label></BodyData>
                <BodyData className="call-data-description"><label><a data-call={call.id} onClick={this.handleDetails}>Ver Detalhes</a></label></BodyData>
              </TableBody>
            )
          })}
        </StateTable>
      </StateListContainer>
      </React.Fragment>
    )
  }
}