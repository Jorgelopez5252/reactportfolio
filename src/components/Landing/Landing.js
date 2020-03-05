import React from "react";
import Parallax from "../../Parallax";
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
        paragraph="Proficient Skills"
        title="Known Technologies"
        url="https://github.com/Jorgelopez5252/reactportfolio/blob/master/public/images/trifecta.jpg?raw=true"
      />

      <Parallax
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dolor mi, aliquet ac tristique vel, molestie sed ex. Cras blandit ante urna, et aliquam augue tempus iaculis. Curabitur gravida ut magna ac mollis."
        title="Node.js"
        url="https://github.com/Jorgelopez5252/reactportfolio/blob/master/public/images/nodeJs.jpg?raw=true"
      />

      <Parallax
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dolor mi, aliquet ac tristique vel, molestie sed ex. Cras blandit ante urna, et aliquam augue tempus iaculis. Curabitur gravida ut magna ac mollis."
        title="React.js"
        url="https://github.com/Jorgelopez5252/reactportfolio/blob/master/public/images/reactWhite.png?raw=true"
      />
      
    </div>
  );
}

export default Landing;
