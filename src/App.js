import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
      <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/contact" component={Contact}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
