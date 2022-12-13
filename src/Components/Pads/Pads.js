import "./Pads.css"

import React from "react";
import PadItem from "./PadItem/PadItem";


export default class Pads extends React.Component {

    constructor(props) {
        super(props);
        this.renderPads();
    }


    renderPads() {
        const pads = this.props.pads;
        this.padsElement = pads.map((pad, index) => <PadItem key={index} name={pad.name} />)
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