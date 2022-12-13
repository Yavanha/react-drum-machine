import "./DrumMachine.css"
import React from "react"
import Pads from "../Pads/Pads"

export default class DrumMachine extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOn: true,
            volumne: 0.3,
            pads: [
                {
                    name: 'Heater 1',
                    letter: 'Q',
                    sound: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3")
                },
                {
                    name: 'Heater 2',
                    letter: 'W',
                    sound: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3")
                },
                {
                    name: 'Heater 3',
                    letter: 'E',
                    sound: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3")
                },
                {
                    name: 'Heater 4',
                    letter: 'A',
                    sound: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3")
                },
                {
                    name: 'Clap',
                    letter: 'S',
                    sound: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3")
                },
                {
                    name: 'Open HH',
                    letter: 'D',
                    sound: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3")
                },
                {
                    name: 'Kick n\' Hat',
                    letter: 'Z',
                    sound: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3")
                },
                {
                    name: 'Kick',
                    letter: 'X',
                    sound: new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3")
                },
                {
                    name: 'Kick',
                    letter: 'C',
                    sound: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")
                }
            ]
        }
    }

    render() {
        return (<div className="drum-machine">
            <header className="drum-bar"><a class="git-link" href="" >Made by y4rb0w</a></header>
            <div className="left-panel">
                <Pads pads={this.state.pads}/>
            </div>
            <div className="right-panel">
                    hello world
            </div>
        </div>)
    }

}