import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Main from "./containers/Main";
import DataContainer from "./Components/DataContainer";
import Navbar from "./Components/Navbar";

const App = () => (
  <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={DataContainer}/>
        <Route component={Main} />
      </Switch>
    </div>
  </Router>
);

export default App;
