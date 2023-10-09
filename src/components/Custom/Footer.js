import React from "react";
import FooteR from "../style/Footer.module.css";
import logo from "../assets/ricoz 4.svg";
import facbook from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import spotify from "../assets/spotify.png";

const Footer = () => {
  return (
    <footer className={FooteR.footer}>
      <div className={FooteR.col - 1}>
        <img className={FooteR.Logo} src={logo} alt="error" />
      </div>
      <div className={FooteR.col - 2}>
        <h2>Company</h2>
        <ul>
          <li style={{ listStyle: "none" }}>Service</li>
          <li style={{ listStyle: "none" }}>About Us</li>
          <li style={{ listStyle: "none" }}>Course</li>
          <li style={{ listStyle: "none" }}>Contact Us</li>
        </ul>
      </div>
      <div className={FooteR.col - 3}>
        <h2>Service</h2>
        <ul>
          <li style={{ listStyle: "none" }}>
            Web Development
          </li>
          <li style={{ listStyle: "none" }}>
            Performance Marketing
          </li>
          <li style={{ listStyle: "none" }}>
            Social Media Marketing
          </li>
          <li style={{ listStyle: "none" }}>
            App Development
          </li>
          <li style={{ listStyle: "none"}}>
            Graphic Design
          </li>
          <li style={{ listStyle: "none"}}>
            UI/UX Design
          </li>
        </ul>
      </div>
      <div className={FooteR.col - 4} id={FooteR.col1}>
        {/* <h2 id={FooteR.col4heading}>Email Us</h2> */}
        <h2>Email Us</h2>
        <p>Rico123@gmail.com</p>
        <h2>Contact Us</h2>
        {/* <h2 id={FooteR.col4heading}>Contact Us</h2> */}
        <p>+91-9876543210</p>
        {/* Social media icons can be added here */}
        <div className={FooteR.iconscontainer}>
          <div className={FooteR.icon}>
            <img src={facbook} alt="error"></img>
          </div>
          <div className={FooteR.icon}>
            <img src={twitter} alt="error"></img>
          </div>
          <div className={FooteR.icon}>
            <img src={insta} alt="error"></img>
          </div>
          <div className={FooteR.icon}>
            <img src={linkedin} alt="error"></img>
          </div>
          <div className={FooteR.icon}>
            <img src={spotify} alt="error"></img>
          </div>
        </div>
      </div>
      <div className={FooteR.col - 5}>
        <h2 id={FooteR.col5}>SUBSCRIBE TO NEWSLETTER</h2>
        <div className={FooteR.searchbar}>
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className={FooteR.HorizontalLine}></div>
      <h5>© 2023 Ricoz. All Rights Reserved.</h5>
    </footer>
  );
};

export default Footer;
