import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
// import Card from "./components/Card";

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
      <Switch>
      <Route exact path="/" component={Landing}/>
      {/* <Card /> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
