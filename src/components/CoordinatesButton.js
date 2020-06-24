import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    logCoord = (event) => {
        const coord = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(coord);
    }

    render() {
        return (
            <button onClick={this.logCoord}>What It Do?</button>
        )
    }
}