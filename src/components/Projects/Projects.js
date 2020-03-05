import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

export default class Projects extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".slider");
      var instances = M.Slider.init(elems, {});
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <p>
            Below are a few projects I have had the pleasure in working on with
            both groups as well as independently.
          </p>
        </div>
        <div className="container">
          <div className="slider">
            <ul className="slides">
              <li>
                <img src="https://github.com/Jorgelopez5252/reactportfolio/blob/master/public/images/city2citygif.gif?raw=true" />
                <div className="caption center-align">
                  <h3><a target="blank" href="https://jorgelopez5252.github.io/city2city/">City2City</a></h3>
                  <h5 className="light grey-text text-lighten-3">
                    Group Project
                  </h5>
                </div>
              </li>
              <li>
                <img src="https://github.com/Jorgelopez5252/reactportfolio/blob/master/public/images/tempusgif.gif?raw=true" />
                <div className="caption center-align">
                  <h3><a target="blank" href="https://obscure-tor-81991.herokuapp.com/home">Tempus</a></h3>
                  <h5 className="light grey-text text-lighten-3">
                    Group Project
                  </h5>
                </div>
              </li>
              <li>
                <img src="https://github.com/Jorgelopez5252/reactportfolio/blob/master/public/images/notetakergif.gif?raw=true" />
                <div className="caption center-align">
                  <h3><a target="blank" href="https://morning-fortress-81693.herokuapp.com/">Note Taker</a></h3>
                  <h5 className="light grey-text text-lighten-3">
                    Individual project
                  </h5>
                </div>
              </li>
              <li>
                <img src="https://cdn.technologyreview.com/i/images/iss050e066094large.jpg?sw=959&cx=0&cy=148&cw=1920&ch=1080" />
                <div className="caption center-align">
                  <h3>Open Garage!</h3>
                  <h5 className="light grey-text text-lighten-3">
                    Indivdual Project
                  </h5>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p>
            The four projects being displayed above are fully funcitional and
            deployed, please have a look at the them and follow the
            corresponding links!
          </p>
        </div>
      </div>
    );
  }
}

