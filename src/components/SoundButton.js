import React, { Component } from 'react';
import '../css/SoundButton.css';

export default class SoundButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
    this.audio = document.getElementById(this.props.triggerKey);
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
    this.props.playAudioHook(this.props);
    this.audio.play();
  }

  handleClick() {
    this.playAudio();
  }

  render() {
    return (
      <button
        id={this.props.name.replace(/\s/g,"-")}
        className="drum-pad"
        onClick={this.handleClick}>
        {this.props.triggerKey}
        <audio id={this.props.triggerKey}>
          <source src={this.props.audioSrc} type="audio/mp3"/>
        </audio>
      </button>
    );
  }
}
