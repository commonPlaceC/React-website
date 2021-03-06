import React, { Component } from 'react';
import Socials from './socials';
// import emailjs from 'emailjs-com';
import "./emailHandler.css";
import {VscMail} from 'react-icons/vsc';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import Footer from './Footer';


export default function ContactUs() {

    // function sendEmail(e) {
    //   e.preventDefault();
  
    //   emailjs.sendForm('main_mail', 'template_nii4wr9', e.target, 'user_AmGPfMZuQ4gZQz8C219hh')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    //     e.target.reset()
    // }

    return (
      <div>
        <Socials/>
        <div className="phoneInfo">
          <span className="unselectable ">call number<br/></span>
          <IoPhonePortraitOutline size = "40px"/>
          <a href="tel:+79165271947">+7 916 527-19-47</a>
        </div>
        <div className="mailP">
            <p>or </p>
              <a href="mailto:alex.agarkov.753@gmail.com">Email</a>
            <p> me</p>
        </div>
        {/* <div className="item centerEmail">
        <div className="contactForm">
            <form className="contact-form" onSubmit={sendEmail}>
                <p className="gridLabelZero pColor">to alex.agarkov.753@gmail.com</p>
                <VscMail className="invertedSvg1" size="160px"/>
                <input type="text" name="user_name" className="gridInputOne" placeholder="Name" required/>
                <input type="email" name="user_email" className="gridInputTwo" placeholder="Email" required/>
                <label className="textOut gridLabelThree">Message:</label>
                <textarea name="message" maxLength="2000" className="gridTextArea" placeholder="Write here: 2000 symbols" required/>
                <input type="submit" value="Send" className="buttonSend"/>
            </form>
          </div>
        </div> */}
        <Footer/>
      </div>
      );

}
