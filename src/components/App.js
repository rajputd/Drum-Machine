import React, { Component } from 'react';
import SoundButton from './SoundButton.js';
import audioSources from '../audioSources.json';

class App extends Component {
  render() {
    const soundNames = Array.from(Object.keys(audioSources));
    return (
      <div>
        {
          soundNames.map((name) => {
            let audio = new Audio(audioSources[name]);
            return <SoundButton key={name} name={name} audio={audio} />;
          })
        }
      </div>
    );
  }
}

export default App;
