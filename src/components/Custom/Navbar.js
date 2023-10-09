import React from 'react';
import Logo from '../assets/ricoz 4.svg'
import navbar from '../style/Navbar.module.css'; 

const Navbar = () => {
  return (
    <nav className={navbar.navbar} style={{padding : "1em 2em"}} >
      <div className={navbar.logo}>
        <img src={Logo} alt='logo'/>
      </div>
      <ul className={navbar.navlinks}>
        <li><a href="./Info.js">About Us</a></li>
        <li><a href="./WhyChooseRinZ.js">Services</a></li>
        <li><a href="./ContactForm.js">Contact</a></li>
        <li><a href="./CourseComponent.js">Courses</a></li>
      </ul>
      <button className={navbar.signupbutton}>Sign Up</button>
    </nav>
  );
};

export default Navbar;