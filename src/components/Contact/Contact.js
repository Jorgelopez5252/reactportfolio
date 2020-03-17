import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div class="container">
      <div className="row"></div>
      <div class="row">
        <div class="col s6">
          <h2>About me</h2>
          <p>
          I was born in San Diego, California but moved to Mesa, Arizona when I was 7 years old, you can say I am a native here at this point! I recently graduated UofA Full Stack Web Developer coding course, and excited to put my skills out in the field. My background currently is in Banking/Financing where I'm known for my creative and effective problem solving skills to develop user-friendly applications as well as my strong teamwork and attention to detail no matter the complexity of the project.
          </p>


          <h3>Known Technologies</h3>
          <ul>
            <li>HTML5, CSS, Javascript, JQuery, Bootstrap, Bulma, Nodejs, MySQL, MongoDB, Express, Handelbars.js</li>
            <li>React.js, JSX, Components, Props and State.</li>
          </ul>
        </div>

        <div class="col s6">
          <img
            height="450"
            src="https://github.com/Jorgelopez5252/reactportfolio/blob/master/public/images/portphoto.jpeg?raw=true"
            alt="me"
          />
        </div>

      </div>
    </div>
  );
}

export default Contact;
