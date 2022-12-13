import "./PadItem.css"

import React from "react";

export default class PadItem extends React.PureComponent {

    render() {
        return (
            <article className="pad-item">
                {this.props.letter}
            </article>
        )
    }
}