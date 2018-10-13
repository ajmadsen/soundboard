import React from 'react';
import _remove from 'lodash/remove';
import PropTypes from 'prop-types';

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
      currentlyPlaying: this.state.currentlyPlaying.concat({
        key: Date.now(),
        file: filename
      })
    });
  }
  handleClipEnd(key) {
    let { currentlyPlaying } = this.state;
    _remove(currentlyPlaying, o => {
      return o.key === key;
    });
    this.setState({
      currentlyPlaying: currentlyPlaying
    });
  }
  render() {
    const { categories, name } = this.props;
    const { currentlyPlaying } = this.state;
    return (
      <div className="soundboard">
        <h1>{name}</h1>
        {categories.map(obj => (
          <SoundboardCategory
            key={obj.name}
            categoryName={obj.name}
            clips={obj.clips}
            handlePlayClip={this.handlePlayClip}
          />
        ))}
        <div style={{ display: 'none' }}>
          {currentlyPlaying.map(obj => (
            <AudioClip
              onEnded={key => this.handleClipEnd(key)}
              onError={key => this.handleClipEnd(key)}
              fileName={obj.file}
              id={obj.key}
              key={obj.key}
            />
          ))}
        </div>
      </div>
    );
  }
}

Soundboard.propTypes = {
  name: PropTypes.string,
  categories: PropTypes.array
};

Soundboard.defaultProps = {
  name: 'Soundboard',
  categories: []
};

const SoundboardCategory = ({ categoryName, clips, handlePlayClip }) => (
  <div className="soundboard-category">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{categoryName}</h3>
      </div>
      <div className="panel-body">
        {clips.map(clip => (
          <SoundboardButton
            key={clip.file}
            clipName={clip.name}
            fileName={clip.file}
            onClick={handlePlayClip}
          />
        ))}
      </div>
    </div>
  </div>
);

SoundboardCategory.propTypes = {
  handlePlayClip: PropTypes.func
};

SoundboardCategory.defaultProps = {
  handlePlayClip: () => {}
};

const SoundboardButton = ({ clipName, fileName, onClick }) => (
  <button
    className="soundboard-button btn btn-default"
    onClick={() => onClick(fileName)}
  >
    {clipName}
  </button>
);

SoundboardButton.propTypes = {
  onClick: PropTypes.func,
  clipName: PropTypes.string,
  fileName: PropTypes.string
};

SoundboardButton.defaultProps = {
  onClick: () => {}
};

class AudioClip extends React.Component {
  componentDidMount() {
    const { id, onError } = this.props;
    let handler = e => onError(id, e);

    this.source.addEventListener('error', handler);
    this.removeHandler = () =>
      this.source.removeEventListener('error', handler);
  }
  componentWillUnmount() {
    this.removeHandler();
  }
  render() {
    const { onEnded, fileName, id } = this.props;
    return (
      <audio onEnded={() => onEnded(id)} autoPlay={true}>
        <source
          src={fileName}
          ref={node => (this.source = node)}
          type="audio/mp3"
        />
      </audio>
    );
  }
}

AudioClip.propTypes = {
  fileName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onError: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
