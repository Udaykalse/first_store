import React from "react";
import conone from "./../../assets/Getint.png";
import contactform from "./ContactForm.module.css";
import gitone from "./../../assets/gitone.png";
import gittwo from "./../../assets/gitotwo.png";
import gitthree from "./../../assets/openmoji_telephone.png";

const ContactForm = () => {
  return (
    <section className={contactform.contactcontainer}>
      <div className={contactform.main}>
        <div className={contactform.imageContainer}>
          <img src={conone} alt="Contact Image" className={contactform.contactimage} />
        </div>
        <div className={contactform.ContentContainer}>
          <div className={contactform.formcontainer}>
            <h1>Get in Touch</h1>
            <div className={contactform.inputcontainer}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Name" />
            </div>
            <div className={contactform.inputcontainer}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div className={contactform.inputcontainer}>
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" placeholder="Phone" />
            </div>
            <div className={contactform.inputcontainer}>
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Message"></textarea>
            </div>
            <button className={contactform.submitbutton}>Submit Now</button>
          </div>
        </div>
      </div>

      <div className={contactform.HorizontalLine}></div>

      <div className={contactform.iconscontainer}>
        <div className={contactform.iconItem}>
          <img src={gitone} className={contactform.icons} alt="Phone Icon" />
          <p>+91-7011112666</p>
        </div>
        <div className={contactform.iconItem}>
          <img src={gittwo} className={contactform.icons} alt="Email Icon" />
          <p>info@Ricoz.in</p>
        </div>
        <div className={contactform.iconItem}>
          <img src={gitthree} className={contactform.icons} alt="Website Icon" />
          <p>Ricoz.in</p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
