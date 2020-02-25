import React from "react";
import Parallax from "../Parallax";
import "./Landing.css";

function Landing() {
  return (
    <div>
      <Parallax
        paragraph="I was born in San Diego, California but moved to Mesa, Arizona when I was 7 years old. I guess you could say I am a native here at this point. I am very passionate about working with others, the collaboration of many ideas fills my passion on being a Full Stack Web Developer. I am no stranger to the weird and uncomfortable, and I feel the best way to learn is to place yourself in the unfamiliar and unknown as your own results can and will surprise you!"
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
        title="node.js"
        url="https://github.com/Jorgelopez5252/reactportfolio/blob/master/public/images/nodeJs.jpg?raw=true"
      />

      <Parallax
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dolor mi, aliquet ac tristique vel, molestie sed ex. Cras blandit ante urna, et aliquam augue tempus iaculis. Curabitur gravida ut magna ac mollis."
        title="React.js"
        url="https://github.com/Jorgelopez5252/reactportfolio/blob/master/public/images/reactWhite.png?raw=true"
      />
      <div>Footer goes down here</div>
    </div>
  );
}

export default Landing;
