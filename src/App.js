import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Page404 from "./pages/Page404";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/sign_up" component={SignUp} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
