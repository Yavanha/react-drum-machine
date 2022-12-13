import "./PadItem.css"

import React from "react";

export default class PadItem extends React.PureComponent {

    render() {
        return (
            <article id={this.props.id} className="pad-item" onClick={this.props.play}>
                {this.props.letter}
            </article>
        )
    }
}