import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import InputComponent from './components/input_component';


class App extends Component {

  state = {
    fields: {},
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue,
      }
    });
};
  render() {
    return (
      <div> 
        <InputComponent onChange={fields => this.onChange(fields)}/>
        <p>{JSON.stringify(this.state.fields)}</p>
      </div>
    );
  }
}

export default App;