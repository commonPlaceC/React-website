import React, { useState} from 'react';
import { saveAs, fileSaver } from 'file-saver';
import './DownloadCard.css';
import { FiDownload } from "react-icons/fi";

export default function DownloadCard() {

    const littleStyles =  {
        filter: 'invert(1)',
        backgroundColor: 'white',
    }

    //function for saving file
    const saveManual = () => {
        fileSaver.saveAs(
            process.env.REACT_APP_CLIENT_URL + "../Storage/matrixrotation.py",
            "manual.pdf"
    );
    };

    return (
        <div>
            
            <div className="downloadCard">
                <div className="fileName">
                    <span> matrixroatation.py</span>
                </div>
                <div className='downloadInfo'>
                    <span>2.5 mb</span>
                </div>
                <div className="downloadButton">
                    <a href="../Storage/matrixrotation.py" download>
                        <FiDownload style={littleStyles} size='55px'/>
                        <button onClick={saveManual}>
                            Manual
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
