import React, { Component } from 'react'
import Form from '../Components/Form';
import Code from '../Components/Code';
import Footer from '../Components/Footer';
import Photos from '../Components/Photos';
import Warning from '../Components/Warning';
import face from "../Components/img/face2.jpg";
import Projects from '../Components/Projects';
import "../App.css";

const splash = useRef('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
  setTimeout(()=>{
    splash.classList.add('displayNone')
  }, 2000);
})


export default class Home extends Component {
    render() {
        return (
            <div>
              <div className="splash">
                <h1>Welcome To CommonPage</h1>
              </div>
              <div className="warning"><Warning/></div>
              <div className="wrapper">
                <div className="gridCode"><Code/></div>
                <div className="gridPhotos"><Photos/></div>
                <div className="main">
                  <div className="centering">
                    <h1 className="infotextWelcome">Hey, I'm Agarkov Aleksey!</h1>
                  </div>
                  <div className="infotext"><Form/></div>
                  <img src={face} alt="It's me" className="mainPhoto"/>
                </div>
                <p className="works">
                  <h1>My Projects</h1>
                  <Projects/>
                </p>
              </div>
            </div>
          );
    }
}
