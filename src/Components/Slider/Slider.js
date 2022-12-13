import "./Slider.css"

import React from "react"

export default class Slider extends React.PureComponent {

    render() {
        return (
            <div class="slider-container">
                <input className="slider" onChange={this.props.volumeChanged} type="range" min="0" max="100" value={Math.trunc(this.props.volume * 100)}></input>
            </div>
        )
    }
}