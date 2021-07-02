import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import "./emailHandler.css";


export default function ContactUs() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('main_mail', 'template_nii4wr9', e.target, 'user_AmGPfMZuQ4gZQz8C219hh')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (
      <div>
        <div className="box">
          <div className="item">
            <div className="contactForm">
              <form className="contact-form" onSubmit={sendEmail}>
                  <p className="gridLabelZero pColor">to alex.agarkov.753@gmail.com</p>
                  <label className="textOut gridLabelOne">Name</label>
                  <input type="text" name="user_name" className="gridInputOne" required/>
                  <label className="textOut gridLabelTwo">Email</label>
                  <input type="email" name="user_email" className="gridInputTwo" required/>
                  <label className="textOut gridLabelThree">Message:</label>
                  <textarea name="message" maxLength="2000" className="gridTextArea" placeholder="Write here: 2000 symbols" required/>
                  <input type="submit" value="Send" className="buttonSend"/>
              </form>
            </div>
            <p className="pColorEnd">You can also try:</p> 
          </div>
          <div className="item">
            <h1>pageTwo</h1>
          </div>
        </div>
      </div>
      );

}
