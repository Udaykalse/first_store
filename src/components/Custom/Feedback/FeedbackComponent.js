import React from 'react';
import  feed from './FeedbackComponent.module.css';
import feedone from './../../assets/Feedbackone.png';
import feedtwo from './../../assets/Feedbacktwo.png';
import feedthree from './../../assets/Feedbackthree.png';
import Star from './../../assets/feedStar.png' 

const FeedbackComponent = () => {
  return (
    <div className={feed.feedbackcontainer}>
      <h1 className={feed.h1}>Real Stories from Real Professionals</h1>
      <div className={feed.feedbackcards}>
        <div className={feed.feedbackcard}>
        <img
        src={feedone}
        alt="Contact"
        className={feed.contactimage}
      />
          <h3>Itachi Uchiha </h3>
          <p>student</p>
          <h2>"I recommend this to All"</h2>
          <p id={feed.psecond}>As a freelancer, Ricoz's instant search feature saves me time. It's a one-stop platform for all my degital marketing needs.</p>
          <div className={feed.rating}>
          <img src={Star} alt='star'/>
          <img src={Star} alt='star'/>
          <img src={Star} alt='star'/>
          <img src={Star} alt='star'/>
          <img src={Star} alt='star'/>
          </div>
        </div>


        <div className={feed.feedbackcard}>
          <img
        src={feedtwo} 
        alt="Contact"
        className={feed.contactimage}
      />
          <h3>eren yeager</h3>
          <p>Developer</p>
          <h2>“The Support is Awesome”</h2>

          <p id={feed.psecond}>Ricoz connected me with clients. The quality scoring system ensures I work on exciting projects while maintaining my reputation.</p>
          <div className={feed.rating}>
          <img src={Star} alt='star'/>
          <img src={Star} alt='star'/>
          <img src={Star} alt='star'/>
          <img src={Star} alt='star'/>
          <img src={Star} alt='star'/>
          </div>
        </div>


        <div className={feed.feedbackcard}>
        <img
        src={feedthree} 
        alt="Contact"
        className={feed.contactimage}
      />
          <h3>dazai osamu</h3>
          <p>Student</p>
          <h2>“A Game Changer For Us”</h2>
          <p id={feed.psecond}>I've learned and earned on Ricoz. The courses are well-designed, and the integrated tools streamline communication with clients.</p>
          <div className={feed.rating}>
          <img src={Star} alt='star'/>
          <img src={Star} alt='star'/>
          <img src={Star} alt='star'/>
          <img src={Star} alt='star'/>
          <img src={Star} alt='star'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackComponent;
