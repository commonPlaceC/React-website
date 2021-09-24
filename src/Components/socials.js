import React, { Component } from 'react';
import { FaTelegramPlane, FaInstagram, FaGithub, FaVk } from 'react-icons/fa';

import "./socials.css";


export default class socials extends Component {
    render() {
        return (
            <div className="cntr">
                <h1 className="sh1 unselectable ">socials</h1>
                <div className="wrapperSocials">
                    <a href="https://t.me/Phtmct">
                        <div className="sCircle telegram" >
                            <FaTelegramPlane size = "40px"/>
                            <p className="cntr">Phtmct</p>
                        </div>
                    </a>
                    <a href="https://vk.com/tail753">
                        <div className="sCircle vk">
                            <FaVk size = "40px"/>
                            <p className="cntr">tail753</p>
                        </div>  
                    </a>
                    <a href="https://www.instagram.com/commonplacefake/">
                        <div className="sCircle instagram">
                            <FaInstagram size = "40px"/>
                            <p className="cntr">commonplacefake</p>
                        </div>
                    </a>

                    <a href="https://github.com/commonPlaceC">
                        <div className="sCircle github">
                            <FaGithub size = "40px"/>
                            <p className="cntr">commonPlaceC</p>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}
