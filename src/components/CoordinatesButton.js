import React, {Component} from 'react'

export default class CoordinatesButton extends Component {
    handleClick = (event) => {
        const eventArray = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(eventArray);
    }

    render() {
        return <button onClick={this.handleClick}>click</button>
    }
}
