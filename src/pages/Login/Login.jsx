import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import "../Login/Login.css";
import SectionFromLogin from "../../components/SectionFromLogin";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { Link } from "react-router-dom";

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
        <div className="form">
          <form onSubmit={(event) => this.handleSubmitForm(event)}>
            <input
              type="text"
              id="text"
              onChange={(event) => this.handleUpdateText(event)}
              value={this.state.text}
              className="form-control"
              placeholder="Telefon, email sau nume utilizator"
            />
            <input
              type="password"
              id="password"
              onChange={(event) => this.handleUpdatePassword(event)}
              value={this.state.password}
              className="form-control"
              placeholder=" Parola"
            />
            <input
              type="submit"
              value="Conectare"
              className="btn btn-primary"
            />
          </form>
        </div>
        <div className="section-form-login">
          <SectionFromLogin />
        </div>
        <div className="button-login-facebook">
          <button type="button">
            <Facebook className="w-25 mr-3" />
            <span className="text-nowrap">Conectare cu Facebook</span>
          </button>
        </div>
        <Link to='/password_reset' className='link'>
          <p>Ai uitat parola?</p>
        </Link>
      </div>
    );
  }
}

export default Login;
