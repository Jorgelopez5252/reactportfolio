import React from "react";
import Parallax from "../Parallax";

function Landing() {
  return (
    <div>
      <Parallax
          paragraph="Duke it out with 4 of your friends or foes, in this turned based,tactical, and unpredictable game experience!"
          title="Welcome to Footballadamus!"
          url="https://github.com/UlyssesFigueroa/Sandbox/blob/jorge/client/public/assets/images/theBoys.jpg?raw=truee"
        />

        <Parallax
          paragraph="Each player will be allowed to make once choice on a possible play or outcome  during a LIVE GAME (Tackle, Pass, Run , Field Goal, ETC) that will be active for the current play/drive and another that will be placed in que, the latter will then come up on the next play"
          title="Make the call!"
          url="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/back-view-shot-of-the-beautiful-professional-gamer-royalty-free-image-1010650900-1564417674.jpg?crop=0.757xw:1.00xh;0.109xw,0&resize=640:*"
        />

        <Parallax
          paragraph="Using advance updates via API, live gameplay action will be provided via our feed and if your selection matches the play or Outcome you had decided on, then you shall be awarded a point towards your score"
          title="Live Action, Live Updates!"
          url="https://cdn.vox-cdn.com/thumbor/9ovEcbVj59oLaNMOxK4H02tlNGI=/0x0:4272x2524/1200x800/filters:focal(1875x700:2557x1382)/cdn.vox-cdn.com/uploads/chorus_image/image/65905530/usa_today_11987845.0.jpg"
        />
<div>Footer goes down here</div>
    </div>
  );
}

export default Landing;
