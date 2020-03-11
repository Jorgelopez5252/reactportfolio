import React from "react";
import Parallax from "../../Parallax/Parallax";
import './Landing.css';

function Landing() {
  return (
    <div className="container"> 
      <Parallax
        paragraph="Full Stack Web Developer with a background in Banking/Financing and life-long dedication to learning. Effective at combining creativity and problem solving to develop user-friendly applications. Known among staff for strong wit and attention to detail no matter the complexity of the project."
        title="Jorge Antonio Lopez"
        url="https://github.com/Jorgelopez5252/reactportfolio/blob/master/public/images/cardinalstadium.jpg?raw=true"
      />

      <Parallax
        paragraph="Proficient Skills-HTML5, CSS, Javascript, JQuery, Bootstrap,"
        title="Known Technologies"
        url="https://skywell.software/wp-content/uploads/2019/01/javascript-vs-html-vs-css-1024x683.jpg"
      />

      <Parallax
        paragraph=" Node Js, MySQL, MongoDB,."
        title="Node.js"
        url="https://github.com/Jorgelopez5252/reactportfolio/blob/master/public/images/nodeJs.jpg?raw=true"
      />

      <Parallax
        paragraph="JSX, Rendering Elements, Great Understanding of Components and Props as well as State and hooks ."
        title="React.js"
        url="https://github.com/Jorgelopez5252/reactportfolio/blob/master/public/images/React-logo.jpg?raw=true"
      />
      
    </div>
  );
}

export default Landing;
