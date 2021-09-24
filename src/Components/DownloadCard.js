import React, { useState } from 'react';
import './DownloadCard.css';
import { FiDownload } from "react-icons/fi";

export default function DownloadCard({file}) {

    // Variables

    let url = file.url;
    let name = file.name;
    let ext = file.ext;

    // Some styles 
    const littleStyles =  {
        margin: 'auto',
        filter: 'invert(1)',
    };


    return (
        <div className="cardElement">
            <div className="downloadCard">
                <div className="fileName">
                    <span> {name}</span>
                </div>
                <div className='downloadInfo'>
                    <span>{ext}</span>
                </div>
                <a href={url} className="downloadButton" download target="_blank">
                    <FiDownload style={littleStyles} size='55px'/>
                </a>
            </div>
        </div>
    )
}
