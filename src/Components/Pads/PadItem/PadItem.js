import "./PadItem.css"

import React from "react";

export default class PadItem extends React.PureComponent {

    render() {
        return (
            <div className="pad-item">
                {this.props.name}
            </div>
        )
    }
}