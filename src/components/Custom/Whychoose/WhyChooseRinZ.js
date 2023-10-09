import React from "react";
import whychoose from "./WhyChooseRinZ.module.css";
import frame1 from "./../../assets/FrameONE.png";
import frame2 from "./../../assets/F2.png";
import frame3 from "./../../assets/F3.png";
import frame4 from "./../../assets/F4.png";
import frame from "./../../assets/frame.png";

const WhyChooseRinZ = () => {
  return (
    <div className={whychoose.whychooserinz}>
      <h1 id={whychoose.Headingone}>Why Choose RinZ</h1>
      <div className={whychoose.content}>
        <div className={whychoose.left}>
          <img className={whychoose.frame} src={frame} alt="logo" />
        </div>
        <div className={whychoose.right}>
          <div className={whychoose.feature}>
              <img className={whychoose.icon} src={frame3} alt="logo" />
            <div className={whychoose.featurecontent}>
              <h2>Quality You Can Trust</h2>
              <p>
                Expect high-quality services from our trusted professionals.
              </p>
            </div>
          </div>
          <div className={whychoose.feature}>
            <img className={whychoose.icon} src={frame2} alt="logo" />
            <div className={whychoose.featurecontent}>
              <h2>Effortless Collaboration</h2>
              <p>
                Collaborate seamlessly with professionals for your projects.
              </p>
            </div>
          </div>
          <div className={whychoose.feature}>
            <img className={whychoose.icon} src={frame1} alt="logo" />
            <div className={whychoose.featurecontent}>
              <h2>Save Time and Effort</h2>
              <p>
                Efficiently find the right professionals and save valuable time.
              </p>
            </div>
          </div>
          <div className={whychoose.feature}>
            <img className={whychoose.icon} src={frame4} alt="logo" />
            <div className={whychoose.featurecontent}>
              <h2 >Another Benefit</h2>
              <p >
                Another description for a benefit you offer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseRinZ;
