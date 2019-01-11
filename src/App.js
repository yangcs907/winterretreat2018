import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import About from "./About.js";
import Speaker from "./Speaker.js";
import Register from "./Register.js";
import Workshops from "./Workshops.js";
import Shirt from "./Shirt.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import Expired from "./Expired.js";

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/About" component={About} />
        <Route exact path="/Speaker" component={Speaker} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Workshops" component={Workshops} />
        <Route exact path="/Shirt" component={Shirt} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Expired" component={Expired} />
        <Redirect from="/" to="/About" />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
