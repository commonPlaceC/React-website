import React, { Component } from 'react'
import './Warning.css';

export default class Warning extends Component {
    render() {
        return (
            <div>
                <span className="warnColor">Alpha version, Tets only</span>
            </div>
        )
    }
}
