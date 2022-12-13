import "./Slider.css"

import React from "react"

export default class Slider extends React.PureComponent {

    render() {
        return (
            <div className="slider-container">
                <input className="slider" onChange={this.props.volumeChanged} type="range" min="0" max="100" value={this.props.volume}></input>
            </div>
        )
    }
}