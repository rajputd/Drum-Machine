import React, { Component } from 'react';

export default class SoundButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.audio.play();
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.props.name}</button>
    )
  }
}
