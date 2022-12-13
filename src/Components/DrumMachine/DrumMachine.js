import "./DrumMachine.css"
import React from "react"
//components
import Pads from "../Pads/Pads"
import Slider from "../Slider/Slider"

export default class DrumMachine extends React.Component {

    constructor(props) {
        super(props)
        this.onHandleVolume = this.onHandleVolume.bind(this)
        this.state = {
            isOn: true,
            volume: 0.3,
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

    onHandleVolume(event) {
        this.setState(state => ({
            isOn : state.isOn,
            pads : state.pads,
            volume : parseInt(event.target.value) / 100
        }))
    }

    render() {
        return (<div className="drum-machine">
            <header className="drum-bar">
                <a className="git-link" target="_blank" href="https://github.com/Yavanha" >Made by y4rb0w</a>
            </header>
            <div className="left-panel">
                <Pads pads={this.state.pads} volume={this.state.volume} />
            </div>
            <div className="right-panel">
                <Slider volume={this.state.volume} volumeChanged={this.onHandleVolume} />
            </div>
        </div>)
    }

}