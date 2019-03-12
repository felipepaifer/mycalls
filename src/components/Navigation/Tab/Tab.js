import React from 'react';
import { Link } from 'react-router-dom';
import { TabsList } from './styled';

export default class Tab extends React.Component {

  state = {
    clickedTab: ""
  }

  componentDidMount() {
    const currentURL = window.location.href;

    if (currentURL.includes('/')) {
      this.setState({ clickedTab: 'Chamados' });
    }

    if (currentURL.includes('/chamados')) {
      this.setState({ clickedTab: 'Chamados' });
    }

    if (currentURL.includes('registro')) {
      this.setState({ clickedTab: 'Registro de Chamado' });
    }
  }

  handleClick = (e) => {
    const target = e.target.getAttribute('data-tab');
    this.setState({ clickedTab: target });
  }

  render() {
    return (
      <TabsList>
        <li>
          <Link 
            className="tab-chamados"
            to="/chamados" 
            onClick={this.handleClick} 
            data-tab="Chamados"
            style={this.state.clickedTab === "Chamados" ? {color: '#1C7FD9'} : null}>
            Chamados
          </Link>
        </li>
        <li>
          <Link 
            to="/registro" 
            onClick={this.handleClick} 
            data-tab="Registro de Chamado"
            style={this.state.clickedTab === "Registro de Chamado" ? {color: '#1C7FD9'} : null}>
            Registro de Chamado
          </Link>
        </li>
      </TabsList>
    )
  }
}