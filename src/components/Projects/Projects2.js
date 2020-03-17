import React from "react";
import "./Projects2.css";

function Projects2() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s6">
          <h2>City 2 City</h2>
          <img
            className="projectImage"
            src="https://images-na.ssl-images-amazon.com/images/I/71vXyyrr6mL._SL1200_.jpg"
            alt="mock"
          />
        </div>

        <div className="col s6">
          <br />
          <h4>Tech Used</h4>

          <li>HTML/ CSS/ JAVASCRIPT/ jQUERY/ AJAX</li>
          <li>
            Bulma - CSS Framework, Teleport - City Data API, Open Weather -
            Weather API
          </li>
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
                Deployed:<strong className="repoLinks">"Click Here"</strong>
              </li>
            </a>
          </ul>
        </div>
      </div>
      {/* above is good and used for template */}

      <div className="row">
        <div className="col s6">
          <h2>Tempus Werx </h2>

          <img
            className="projectImage"
            src="https://www.fermag.com/ext/resources/images/Punching-the-clock.jpg?1554225101"
            alt="mock"
          />
        </div>

        <div className="col s6">
          <br />
          <h4>Tech Used</h4>

          <li>HTML/CSS/JAVASCRIPT/HANDLEBARS/NODE.JS/Sequelize</li>
          <li>
            Bulma - CSS Framework, Font Awesome - CSS Framework​,
            Passport.js-Authentication
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
                Deployed:<strong className="repoLinks">"Click Here"</strong>
              </li>
            </a>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col s6">
          <h2>Note Taker </h2>

          <img
            className="projectImage"
            src="https://lh3.googleusercontent.com/cJValhAQ8honF9MrmSNvl8VcnsPvzfVjyseZQ7i99SUIE8cSDACTV7bn7BUKLzLSazk"
            alt="mock"
          />
        </div>

        <div className="col s6">
          <br />
          <h4>Tech Used</h4>

          <li>HTML/ CSS/ JAVASCRIPT/ jQUERY/ API calls</li>
          <li>
            Bootstrap - CSS Framework, Font Awesome - CSS Framework , JQuery -
            Javascript Language​
          </li>
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
                Deployed:<strong className="repoLinks">"Click Here"</strong>
              </li>
            </a>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col s6">
          <h2>Daily-Planner </h2>

          <img
            className="projectImage"
            src="https://assets.fellowes.com/documents/IdeaCenter/us/en/business/organization/Planners/daily-schedule-planner/preview.png"
            alt="mock"
          />
        </div>

        <div className="col s6">
          <br />
          <h4>Tech Used</h4>

          <li>HTML/ CSS/ JAVASCRIPT/ jQUERY</li>
          <li>
            Bootstrap - CSS Framework, Font Awesome - CSS Framework , JQuery -
            Javascript Language​
          </li>
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
                Deployed:<strong className="repoLinks">"Click Here"</strong>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects2;
