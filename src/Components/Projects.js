import React, { Component } from 'react';
import "./Projects.css";

export default class Projects extends Component {
    render() {
        return (
            <div>
                <div className="ProjectSample">
                    <h1>Portfolio Site</h1>
                    <div>
                        GitHub link -
                        <a href="https://github.com/commonPlaceC/React-website" className="Link">https://github.com/commonPlaceC/React-website</a>
                    </div>
                    <h1>Python Exchange Rates App with web UI</h1>
                    <div>
                        GitHub link -
                        <a href="https://github.com/commonPlaceC/python-exchangeRates-webUI" className="Link">https://github.com/commonPlaceC/python-exchangeRates-webUI</a>
                    </div>
                    <h1>React Native Note App</h1>
                    <div>
                        GitHub link -
                        <a href="https://github.com/commonPlaceC/react-native-note-app" className="Link">https://github.com/commonPlaceC/react-native-note-app</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}
