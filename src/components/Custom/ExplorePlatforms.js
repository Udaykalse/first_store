import React from "react";
import "bootstrap/dist/css/bootstrap.css"; 
import explore from "../style/ExplorePlatforms.module.css";
 import Explore1icon from "../assets/Explore1icon.svg.png";
 import Explore2 from "../assets/Explore2.png";
 import Explore3 from "../assets/Explore3.png";


const ExplorePlatforms = () => {
  return (
    <div className={explore.exploreplatforms}>
      <h1 id={explore.heading}>Explore Our Platforms unique features</h1>
      <div className={explore.cardcontainer}>
        <div className={explore.card}>
          <div className={explore.iconcontainer}>
            <img className="" src={Explore1icon} alt="logo" />
          </div>
          <h2>Wide Range of Services</h2>
          <p>
            Find everything from web development to Marketing
            under one roof. Our platform offers a diverse
            array of tech services.
          </p>
        </div>
        <div className={explore.card}>
          <div className={explore.iconcontainer}>
          <img className="" src={Explore3} alt="logo" />
          </div>
          <h2>Instant Search</h2>
          <p>
            Get connected to top tech professionals within 
            moments. Our intuitive search function ensures 
            quick access.
          </p>
        </div>
        <div className={explore.card}>
          <div className={explore.iconcontainer}>
          <img className="" src={Explore2} alt="logo" />
          </div>
          <h2>Quality Scoring</h2>
          <p>
            We maintain high service standards. Our unique 
            scoring system ensures you receive top-notch quality from professionals.
          </p>
        </div>
      </div>
      {/* <WhyChooseRinZ/> */}
    </div>

  );
};

export default ExplorePlatforms;