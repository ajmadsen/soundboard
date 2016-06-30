import React from 'react';
import _remove from 'lodash/remove';

import { SoundboardCategory } from './soundboard-category';

export class Soundboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentlyPlaying: []
    };

    this.handlePlayClip = this.handlePlayClip.bind(this);
    this.handleClipEnd = this.handleClipEnd.bind(this);
  }
  handlePlayClip(filename) {
    this.setState({
      currentlyPlaying: this.state.currentlyPlaying.concat(
        {
          key: Date.now(),
          file: filename
        }
      )
    });
  }
  handleClipEnd(key) {
    let currentlyPlaying = this.state.currentlyPlaying;
    _remove(currentlyPlaying, (o) => {
      return o.key === key;
    });
    this.setState({
      currentlyPlaying: currentlyPlaying
    });
  }
  render() {
    let categories = this.props.categories.map((obj) =>
      <SoundboardCategory
        key={obj.name}
        name={obj.name}
        clips={obj.clips}
        handlePlayClip={this.handlePlayClip} />
    );
    let activeClips = this.state.currentlyPlaying.map((obj) =>
      <audio key={obj.key} onEnded={this.handleClipEnd.bind(this, obj.key)} autoPlay={true}>
        <source src={obj.file} type="audio/mp3" />
      </audio>
    );
    return (
      <div className="soundboard">
        <h1>{this.props.name}</h1>
        {categories}
        <div style={{display:'none'}}>
          {activeClips}
        </div>
      </div>
    );
  }
}

Soundboard.propTypes = {
  name: React.PropTypes.string,
  categories: React.PropTypes.array
};

Soundboard.defaultProps = {
  name: 'Soundboard',
  categories: []
};
