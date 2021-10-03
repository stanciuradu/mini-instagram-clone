import React, { Component } from "react";
import parola from "../../assets/images/parola.png";
import "../MainPasswordReset/MainPasswordReset.scss";
import { Link } from "react-router-dom";

export class MainPasswordReset extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  handleUpdateText(event) {
    const newText = event.target.value;
    this.setState({ text: newText });
  }
  handleSubmitForm(event) {
    event.preventDefault();
    this.setState({
      text: "",
    });
  }
  render() {
    return (
      <div>
        <form className="main-passsword-reset">
          <img src={parola} alt="" />
          <h1>Probleme la conectare?</h1>
          <p>
            Introdu adresa de e-mail, numărul de telefon sau numele de
            utilizator şi îţi vom trimite un link pentru a recăpăta acces la
            cont
          </p>
          <input
            type="text"
            placeholder="Email, telefon sau nume utilizator"
            onChange={(event) => this.handleUpdateText(event)}
            value={this.state.text}
            className="form-control"
          />
          <input
            type="submit"
            value="Trimite linkul e conectare"
            className="btn btn-primary"
          />
          <Link to="/conectare" className="link">
            <button className="btn btn-light">Înapoi la conectare</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default MainPasswordReset;
