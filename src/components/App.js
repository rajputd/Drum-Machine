import React, { Component } from 'react';
import SoundButton from './SoundButton.js';
import config from '../config.js';

class App extends Component {
  render() {
    return (
      <div>
        {
          config.map((buttonConfig) => {
            return <SoundButton key={buttonConfig.triggerKey} {...buttonConfig} />;
          })
        }
      </div>
    );
  }
}

export default App;
