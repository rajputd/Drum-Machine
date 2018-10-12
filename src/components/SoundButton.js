import React, { Component } from 'react';

export default class SoundButton extends Component {
  constructor(props) {
    super(props);

    this.audio = new Audio(this.props.audioSrc);

    this.handleClick = this.handleClick.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.key == this.props.triggerKey ||
        event.key == this.props.triggerKey.toLowerCase()) {
      this.playAudio();
    }
  }

  playAudio() {
    this.audio.play();
  }

  handleClick() {
    this.playAudio();
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.props.triggerKey}</button>
    )
  }
}
