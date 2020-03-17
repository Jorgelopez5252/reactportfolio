import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import Landing from "./components/Landing/Landing";
// Landing Component above not used at this time
import Projects2 from "./components/Projects/Projects2";
// Projects changed to Projects2, a new comp for new layout approach
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Contact} />
        <Route exact path="/projects" component={Projects2} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
