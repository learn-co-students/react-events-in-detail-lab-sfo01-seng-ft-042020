import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    render(){

         let handleClick = (event) => {
            console.log([event.clientX, event.clientY])
           return this.props.onReceiveCoordinates([event.clientX, event.clientY])
           
        }
        return(
            <button onClick={handleClick}>Button</button>
            
        )
    }
}
