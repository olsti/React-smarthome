import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isON: false
        };
       // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        //update state
        this.setState(state => ({
            isON: !state.isOn
        }));
    }

    render() {
        return  (
            <div>
                <button onClick = {this.handleClick}> {this.state.isON ? "ON" : "OFF"}
                </button>
            </div>
        )
    }
}