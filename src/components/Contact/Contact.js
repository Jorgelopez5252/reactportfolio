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
            I was born in San Diego, California but moved to Mesa, Arizona when
            I was 7 years old and you could say I am a native here at this
            point. I am very passionate about working with others, the
            collaboration of many ideas fills my passion on being a Full Stack
            Web Developer. I am no stranger to the weird and uncomfortable, and
            I feel the best way to learn is to place yourself in the unfamiliar
            and unknown as your own results can and will surprise you!
          </p>


          <h3>Contact</h3>
          <ul>
            <li>Phone Number: 480-494-7438</li>
            <li>Email: Jorgelopez5252@gmail.com</li>
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
