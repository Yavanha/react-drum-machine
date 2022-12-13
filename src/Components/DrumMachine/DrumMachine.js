import "./DrumMachine.css"
import React from "react"
//components
import Pads from "../Pads/Pads"
import Slider from "../Slider/Slider"
import Screen from "../Screen/Screen"

export default class DrumMachine extends React.Component {

    constructor(props) {
        super(props)
        this.onHandleVolume = this.onHandleVolume.bind(this)
        this.setDisplayScreen = this.setDisplayScreen.bind(this)
        this.state = {
            isOn: true,
            volume: 30,
            screenDisplay : '',
            pads: [
                {
                    name: 'Heater 1',
                    letter: 'Q',
                    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                },
                {
                    name: 'Heater 2',
                    letter: 'W',
                    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                },
                {
                    name: 'Heater 3',
                    letter: 'E',
                    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                },
                {
                    name: 'Heater 4',
                    letter: 'A',
                    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                },
                {
                    name: 'Clap',
                    letter: 'S',
                    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                },
                {
                    name: 'Open HH',
                    letter: 'D',
                    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                },
                {
                    name: 'Kick n\' Hat',
                    letter: 'Z',
                    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                },
                {
                    name: 'Kick',
                    letter: 'X',
                    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                },
                {
                    name: 'Kick',
                    letter: 'C',
                    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                }
            ]
        }
    }

    onHandleVolume(event) {
        this.setState(state => ({
            ...state,
            volume : Number(event.target.value),
            screenDisplay : `Volume: ${event.target.value}`
        }))
    }

    setDisplayScreen(name) {
        this.setState( state => ({
            ...state,
            screenDisplay : name
        }))
    }

    render() {
        return (<div id="drum-machine" className="drum-machine">
            <header className="drum-bar">
                <a className="git-link" target="_blank" href="https://github.com/Yavanha" >Made by y4rb0w</a>
            </header>
            <div className="left-panel">
                <Pads pads={this.state.pads} volume={this.state.volume} displayScreen={this.setDisplayScreen} />
            </div>
            <div className="right-panel">
                <Screen display={this.state.screenDisplay}/>
                <Slider volume={this.state.volume} volumeChanged={this.onHandleVolume} />
            </div>
        </div>)
    }

}