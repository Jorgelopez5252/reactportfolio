import React from "react";
import Parallax from "../../Parallax/Parallax";
import './Landing.css';

function Landing() {
  return (
    <div>
      <Parallax
        paragraph="Full Stack Web Developer with a background in Banking/Financing and life-long dedication to learning. Effective at combining creativity and problem solving to develop user-friendly applications. Known among staff for strong wit and attention to detail no matter the complexity of the project."
        title="Jorge Antonio Lopez"
        url="https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/556280_419147001430778_2117318718_n.jpg?_nc_cat=100&_nc_ohc=QKfiUVoZ4vEAX8EVoBO&_nc_ht=scontent.fphx1-2.fna&oh=bdc5935885393403e7cd9a7569bacdeb&oe=5EF2F496"
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
        url="https://github.com/Jorgelopez5252/reactportfolio/blob/master/public/images/reactWhite.png?raw=true"
      />
      
    </div>
  );
}

export default Landing;
