import React, { Component } from 'react'
import Info from '../Components/Info';
import Form from '../Components/Form';
import Code from '../Components/Code';
import Footer from '../Components/Footer';
import Photos from '../Components/Photos';
import Warning from '../Components/Warning';
import face from "../Components/img/face2.jpg";


export default class Home extends Component {
    render() {
        return (
            <div>
              <div className="warni">
                <Warning/>
              </div>
              <div className="wrapper">
                <div className="gridCode">
                  <Code/>
                </div>
                <div className="gridPhotos">
                  <Photos/>
                </div>
                <div className="main">
                  <div className="infotextWelcome"><Info/></div>
                  <div className="infotext"><Form/></div>
                  <img src={face} alt="It's me" className="mainPhoto"/>
                </div>
                <p className="works">
                  Here is some my works:
                </p>
                <p className="works1">
                  Nothing here...
                </p>
              </div>
            </div>
          );
    }
}
