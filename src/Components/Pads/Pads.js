import "./Pads.css"

import React from "react";
import PadItem from "./PadItem/PadItem";


export default class Pads extends React.Component {

    constructor(props) {
        super(props);
        this.audioPlay = this.audioPlay.bind(this);
        this.renderPads();
    }

    audioPlay(event) {
        const id = event.target.id;
        const audio = this.props.pads[parseInt(id)].sound;
        audio.volume = this.props.volume;
        audio.play();
    }


    renderPads() {
        const pads = this.props.pads;
        this.padsElement = pads.map((pad, index) => <PadItem key={index} letter={pad.letter} id={index} play={this.audioPlay}/>)
        console.log(this.padsElement)

    }

    render() {
        return (
            <div className="pads">
              {this.padsElement}
            </div>
        )
    }

}