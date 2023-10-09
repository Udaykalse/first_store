import React from "react";
import info from "../style/info.module.css"; 

const TwoImagesSection = () => {
  return (
    <div className={info.twoimagessection}>
      <div className={info.leftcontent}>
        <h1>Discover top Teach <br/>professionals in minutes</h1>
        <h4>
          Streamline your business needs with Ricoz - Your all-in-one tech
          service hub
        </h4>
        <button style={{borderRadius : "22px"}} className={info.getstartedbutton}>Get Started</button>
      </div>
      <div className={info.rightimages}>
        <div className={info.rightimage1}></div>
        <div className={info.rightimage2}></div>
      </div>
    </div>
  );
};

export default TwoImagesSection;