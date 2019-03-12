import React from 'react';
import Select from 'react-select';
import { SelectContainer } from './styled';

export default class SelectOption extends React.Component{

  state = {
    selectedOption: null
  }

  // GET SELECTED OPTION AND SEND DATA TO PARENT WHICH IN THIS CASE IS THE HOME COMPONENT
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () => {
      this.props.getSelectedItem(this.state.selectedOption);
    }); 
  }

  render(){

    const { selectedOption } = this.state

    return(
      <SelectContainer className={this.props.className}>
        <label>{this.props.selectLabel}</label>
        <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={this.props.options}
        placeholder={this.props.placeholder}
        className="select"
      />
      </SelectContainer>
    )
  }
}
