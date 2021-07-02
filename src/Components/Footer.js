import React, { Component } from 'react';
import './Footer.css';


const Footer = () => {
    return ( 
        <div className="mainFooter">
            <div className="container">
                <div className='row'>
                    <p className='text unselectable'>
                        :\> &copy;{new Date().getFullYear()} Agarkov Aleksey | All rigth reserved | Terms of service 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;