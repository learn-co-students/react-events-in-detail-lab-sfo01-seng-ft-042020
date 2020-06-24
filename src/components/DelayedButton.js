import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    handleEvent = (e) => {
        e.persist();
        setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
    }

    render() {
        return (
            <button onClick={this.handleEvent}>
                Delayyyy Me
            </button>
        )
    }
}