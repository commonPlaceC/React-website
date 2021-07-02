import React, { Component } from 'react'
import './Warning.css';

export default class Warning extends Component {
    render() {
        return (
            <div>
                <span className="warnColor unselectable">Alpha version, Test only</span>
            </div>
        )
    }
}
