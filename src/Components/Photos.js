import React, { Component } from 'react';
import './Photos.css';

export default class Code extends Component {
    render() {
        return (
            <div>
                <h1 className="photospan unselectable">Photos</h1>
                <p className="photop unselectable">If you want create some photos
                    you can contact me!<br/>
                    My camera: Canon EOS 6D<br/>
                    Lenses: Canon(EF-L 24-105mm<br/>
                    DO EF 70-300mm)      
                </p>
            </div>
        )
    }
}
