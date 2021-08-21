import React, { Component } from 'react';
import DownloadCard from '../Components/DownloadCard';
import Footer from '../Components/Footer';
import storage from '../firebase';
import './Downloads.css';

export default function Downloads() {


    const files = [
        { name: 'matrixrotation', ext: 'py', url: "https://vk.com/doc307109761_606215311"},
        { name: 'screenshot', ext: 'png', url: "https://disk.yandex.ru/d/yBAsHPDxO07e_A"},
  
    ]

    const styles = 
    storage.ref("matrixrotation.py").getDownloadURL()
    .then((url) => {console.log(url)})

    return (
        <div>
            <div className="downloadsTitle">
                <span>Downloads</span>
            </div>
            <div className="cards">
                { files.map(file => (
                    <DownloadCard file={file}/>
                ))}
            </div>
            <Footer/>
        </div>
    )
}
