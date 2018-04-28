import React from 'react';


export default class InputComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: '',
      emailConfirmation: '',
      password: '',
    }
  }

  displayCurrentState(){
    console.log('the current state is:', this.state);
    return(
        <div>
          <p>{this.state.email}</p>
          <p>{this.state.currentEmail}</p>
        </div>
      );
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit has been triggered, the new state is:', this.state);
    this.setState({
      email: '', 
      emailConfirmation: '',
      password: '',
    })
    this.props.onChange({
      email: '',
      emailConfirmation: '',
      password: '',
    })
  }

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value })
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
 
  sampleFunction(){
    console.log('sampleFunction triggered');
  }

  changeee(){
    console.log('changeee function triggered');
  }


  render(){
    return(
        <div>
          <form>
            <input
              name="email" 
              value={this.state.email} placeholder="email" 
              onChange={e => this.change(e)}
            />
            <br/>
            <input
            name="emailConfirmation" 
            value={this.state.emailConfirmation} placeholder="emailConfirmation"
            onChange={e => this.change(e)}
            />
            <br/>
            <input
            name="password"
            type="password" 
            value={this.state.password} placeholder="password"
            onChange={e => this.change(e)}
            />
            <br/>
            <button onClick={e => this.onSubmit(e)}>Submit</button>
          </form>
          <p>the value of email is: {this.state.email}</p>
          <p>the value of emailConfirmation is: {this.state.emailConfirmation}</p>
          <p>the value of password is: {this.state.password}</p>
          <br/>
          <button onClick={this.displayCurrentState.bind(this)}>click to display current state</button>
          <br/>
          <button onClick={this.changeee.bind(this)}>click</button>
        </div>
      );
  }
}