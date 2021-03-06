import React from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Page404 from "./pages/Page404/Page404";
import PasswordReset from "./pages/PasswordReset/PasswordReset";
import PageProfil from "./pages/PageProfil/PageProfil";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/conectare" component={Login} />
        <Route path="/înscrie-te" component={SignUp} />
        <Route path="/password_reset" component={PasswordReset} />
        <Route path="/page_profil" component={PageProfil}/>
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
