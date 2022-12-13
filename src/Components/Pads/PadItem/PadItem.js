import "./PadItem.css"

import React from "react";

export default class PadItem extends React.PureComponent {

    constructor(props) {
        super(props);
     }


 

    render() {
        const pad = this.props.pad;
        return (
            <article id={pad.name} className="drum-pad" onClick={this.props.play}>
                {pad.letter}
                <audio id={pad.letter} src={pad.soundUrl} className="clip"></audio>
            </article>
        )
    }
}