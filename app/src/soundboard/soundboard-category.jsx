import React from 'react';

import { SoundboardButton } from './soundboard-button';

export class SoundboardCategory extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlayClip = this.handlePlayClip.bind(this);
  }
  handlePlayClip(filename) {
    this.props.handlePlayClip(filename);
  }
  render() {
    let clips = this.props.clips.map((clip) =>
      <SoundboardButton
        key={clip.file}
        clipName={clip.name}
        fileName={clip.file}
        handleClick={this.handlePlayClip} />
    );
    return (
      <div className="soundboard-category">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{this.props.name}</h3>
          </div>
          <div className="panel-body">
            {clips}
          </div>
        </div>
      </div>
    );
  }
}

SoundboardCategory.propTypes = {
  handlePlayClip: React.PropTypes.func
};

SoundboardCategory.defaultProps = {
  handlePlayClip: () => {}
};
