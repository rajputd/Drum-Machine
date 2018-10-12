import React, { Component } from 'react';
import SoundButton from './SoundButton.js';
import config from '../config.js';
import '../css/App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        display: ''
      }

      this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(props) {
    this.setState({display: props.name});
  }

  render() {
    return (
      <div id="drum-machine">
        <h1>Drum Machine</h1>
        <p>click a button or press a key to hear a sound</p>
        <div id="display">
          {this.state.display}
        </div>
        <div id="soundButtons">
          {
            config.map((buttonConfig) => {
              return <SoundButton
                      key={buttonConfig.triggerKey}
                      {...buttonConfig}
                      playAudioHook={this.updateDisplay}/>;
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
