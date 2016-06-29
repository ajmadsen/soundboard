import React from 'react';

import { SoundboardButton } from './soundboard-button';

export class SoundboardCategory extends React.Component {
  render() {
    let clips = this.props.clips.map((clip) =>
      <SoundboardButton
        key={clip.file}
        clipName={clip.name}
        fileName={clip.file}
        handleClick={(fn) => alert(fn)} />
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
