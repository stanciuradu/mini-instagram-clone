import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import "../Login/Login.css";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      password: "",
    };
  }
  handleUpdateText(event) {
    const newText = event.target.value;
    this.setState({ text: newText });
  }
  handleUpdatePassword(event) {
    const newPassword = event.target.value;
    this.setState({ password: newPassword });
  }
  handleSubmitForm(event) {
    //   prevenirea comportamentului default al formularului
    event.preventDefault();
    // resetare state-ului din inputurile formularului
    this.setState({
      text: "",
      password: "",
    });
  }
  render() {
    return (
      <div className="login">
        <img src={logo} alt="Logo" />
        <div className='form'>
        <form onSubmit={(event)=>this.handleSubmitForm(event)}>
          <label htmlFor="text" className='form-label'>Telefon, email sau nume utilizator</label>
          <input
            type="text"
            id="text"
            onChange={(event) => this.handleUpdateText(event)}
            value={this.state.text}
            className='form-control'
          />
          <label htmlFor="password" className='form-label'>Parola</label>
          <input
            type="password"
            id="password"
            onChange={(event) => this.handleUpdatePassword(event)}
            value={this.state.password}
            className='form-control'
          />
          <input type="submit" value="Conectare" />
        </form>

        </div>
      </div>
    );
  }
}

export default Login;
