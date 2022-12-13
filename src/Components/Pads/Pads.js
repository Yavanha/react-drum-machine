import "./Pads.css"

import React from "react";
import PadItem from "./PadItem/PadItem";


export default class Pads extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
    
        this.renderPads();
    }



    handleClick(event) {
        const audio = event.target.children[0];
        const name = event.target.id;
        this.audioPlay(audio, name);
  
    }

    audioPlay(audio, name) { 
        audio.volume = this.props.volume / 100;
        audio.play();
        this.props.displayScreen(name)
    }


ss
    handleKeydown(event) {
        const pad = this.props.pads.find(pad => pad.letter === event.key);
        if(pad === undefined) return null;
        const audio = document.getElementById(pad.letter)
        this.audioPlay(audio, pad.name)
        
     }



    renderPads() {
        const pads = this.props.pads;
        this.padsElement = pads.map((pad, index) => <PadItem key={index} pad={pad} play={this.handleClick}/>)

    }

    render() {
        return (
            <div className="pads">
              {this.padsElement}
            </div>
        )
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown)

    }

}