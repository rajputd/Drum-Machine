import React, { Component } from 'react';
import SoundButton from './SoundButton.js';
import config from '../config.js';

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
      <div>
        <div>
          {
            config.map((buttonConfig) => {
              return <SoundButton
                      key={buttonConfig.triggerKey}
                      {...buttonConfig}
                      playAudioHook={this.updateDisplay}/>;
            })
          }
        </div>
        <div id="display">
          {this.state.display}
        </div>
      </div>
    );
  }
}

export default App;
