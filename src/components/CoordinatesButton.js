// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = (e) => {
    const coordArr = [e.clientX, e.clientY];
    this.props.onReceiveCoordinates(coordArr);
  }
  render() {
    return (
      <button onClick={this.handleClick}>Coordinates</button>
    )
  }
}

export default CoordinatesButton;