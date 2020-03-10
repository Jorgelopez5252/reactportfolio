import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Jorge A. Lopez</h5>
            <p className="grey-text text-lighten-4">
              Mesa, AZ 85205
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="https://github.com/Jorgelopez5252" target="blank">
                  Github
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/jorge-lopez-895307194/" 
                target="blank">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="https://docs.google.com/document/d/16nTvgVu_nce8t_f9udJZ1RKE9D9saKepboN8PXq6dlo/edit?usp=sharing"
                target="blank">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2020 Copyright</div>
      </div>
    </footer>
  );
}

export default Footer;
