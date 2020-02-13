import React from "react";
import Parallax from "../Parallax";

function Landing() {
  return (
    <div className="container">
      <h1>Jorge Lopez</h1>
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

        <Parallax
          paragraph="Whats the point of playing and getting dub's if you cant trash talk it up a bit, if you are an expert in the art of getting under someones skin, then you will love the LIVE CHAT feature. With this option you can keep spitting out the insults or perhaps giving excuses for the lesser players on the scoreboard"
          title="Trash Talk!"
          url="https://github.com/UlyssesFigueroa/Sandbox/blob/jorge/client/public/assets/images/fans-fighting.jpg?raw=true"
        />

        <Parallax
          paragraph="Whoever said winning is not everything obviously never won big or was to afraid to take what is theirs. With our stats tracker and profile options you can make sure your victories are written in a digital stone tablet for all to see and admire "
          title="Gain Braggin Rights!"
          url="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/02/04/786630-new-england-patriots-reuters.jpg"
        />
    </div>
  );
}

export default Landing;
