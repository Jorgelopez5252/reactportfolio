import React from "react";
import "./Projects2.css";

function Projects2() {
  return (
    <div className="container">
      <div className="row">
        <div className="col l6">
          <h2>City 2 City</h2>
          <img
            className="projectImage"
            src="https://github.com/Jorgelopez5252/reactportfolio/blob/master/public/images/city2citygif.gif?raw=true"
            alt="mock"
          />
        </div>

        <div className="col l6">
          <br />
          <h4>Tech Used</h4>

          <li>HTML/CSS/JAVASCRIPT/jQUERY/AJAX</li>
          <li>
            Bulma-CSS Framework, Teleport-City Data API
          </li>
          <li>Open Weather -
            Weather API</li>
          <p>
            This project is designed to compare data between two cities. Data
            like relative housing costs, quality of life, commutes and more. The
            user would use this comparison tool to decide on where they would
            eventually decide to live or relocate. My core responsibilities in
            the project were styling the application as well as adding the
            images to populate for both city and data. The data will then appear
            in the form of a butterfly chart.
          </p>
          <ul>
            <a
              href="https://github.com/Jorgelopez5252/city2city"
              target="blank"
            >
              <li>
                Github repo:<strong className="repoLinks">"Click Here"</strong>
              </li>
            </a>
            <a
              href="https://jorgelopez5252.github.io/city2city/"
              target="blank"
            >
              <li>
                Deployed Link:<strong className="repoLinks">"Click Here"</strong>
              </li>
            </a>
          </ul>
        </div>
      </div>
      {/* above is good and used for template */}

      <div className="row">
        <div className="col l6">
          <h2>Tempus Werx</h2>

          <img
            className="projectImage"
            src="https://github.com/Jorgelopez5252/reactportfolio/blob/master/public/images/tempusgif.gif?raw=true"
            alt="mock"
          />
        </div>

        <div className="col l6">
          <br />
          <h4>Tech Used</h4>

          <li>HTML/CSS/JAVASCRIPT/NODE.JS</li>
          <li>
            Bulma - CSS Framework,Sequelize
            <li> Font Awesome-CSS Framework​</li>
            <li>Passport.js-Authentication</li>
          </li>
          <p>
            This project is designed to keep track of Employee Data for any
            scale of business both Large or Small. Data such as hours tracked
            and employee performance so business owners can make the best
            decision on who they want to keep in their workforce. My core
            responsibilities in the project are styling the application with the
            Bulma Framework and setting up Handlebars functionality ,as well as
            the sign in/ sign up component.
          </p>
          <ul>
            <a href="https://github.com/Jorgelopez5252/Tempus" target="blank">
              <li>
                Github repo:<strong className="repoLinks">"Click Here"</strong>
              </li>
            </a>
            <a
              href="https://obscure-tor-81991.herokuapp.com/home"
              target="blank"
            >
              <li>
                Deployed Link:<strong className="repoLinks">"Click Here"</strong>
              </li>
            </a>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col l6">
          <h2>Note Taker </h2>

          <img
            className="projectImage"
            src="https://github.com/Jorgelopez5252/reactportfolio/blob/master/public/images/notetakergif.gif?raw=true"
            alt="mock"
          />
        </div>

        <div className="col l6">
          <br />
          <h4>Tech Used</h4>

          <li>HTML/CSS/JAVASCRIPT/jQUERY/API calls</li>
          <li>
            Bootstrap - CSS Framework
          </li>
          <li>Font Awesome - CSS Framework</li>
          <p>
            This is a simple Note taker app that is powered with Jquery and can
            save notes and store them .The application uses both api and ajax
            calls to store and save notes written by the user. You may also
            delete your saved notes as well once the certain task is completed
            or you no longer need the note. This application was my first
            exposure to creating api routes, one of the biggest challenges I had
            cross referencing the routes to make sure each each corresponded
            with one another, the biggest take away I learned from this was the
            various “Methods” such as POST and DELETE
          </p>
          <ul>
            <a
              href="https://github.com/Jorgelopez5252/Note-Taker"
              target="blank"
            >
              <li>
                Github repo:<strong className="repoLinks">"Click Here"</strong>
              </li>
            </a>
            <a
              href="https://morning-fortress-81693.herokuapp.com/
              "
              target="blank"
            >
              <li>
                Deployed Link:<strong className="repoLinks">"Click Here"</strong>
              </li>
            </a>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col l6">
          <h2>Day Schedular</h2>

          <img
            className="projectImage"
            src="https://github.com/Jorgelopez5252/reactportfolio/blob/master/public/images/daily%20planner.gif?raw=true"
            alt="mock"
          />
        </div>

        <div className="col l6">
          <br />
          <h4>Tech Used</h4>

          <li>HTML/CSS/JAVASCRIPT/jQUERY</li>
          <li>
            Bootstrap-CSS Framework 
          </li>
          <li> Font Awesome-CSS Framework</li>
          <p>
          This planner allows users to save and track their day to day task by the hour. The time will be highlighted showing the current hour or task at hand and users can save new tasks or delete them. This application was one of my first experiences using local storage in the browser and certainly one I learned the most. 
          </p>
          <ul>
            <a
              href="https://github.com/Jorgelopez5252/Day-Planner"
              target="blank"
            >
              <li>
                Github repo:<strong className="repoLinks">"Click Here"</strong>
              </li>
            </a>
            <a
              href="https://jorgelopez5252.github.io/Day-Planner/"
              target="blank"
            >
              <li>
                Deployed Link:<strong className="repoLinks">"Click Here"</strong>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects2;
