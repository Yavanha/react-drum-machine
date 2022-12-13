import "./Screen.css"

import React from "react";

export default class Screen extends React.Component {

    render() {
        return (
            <div id="display" className="screen">
                     {this.props.display}
            </div>
        )
    }
}