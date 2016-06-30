import React from 'react';

export class SoundboardButton extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }
  click() {
    this.props.handleClick(this.props.fileName);
  }
  render() {
    return (
      <button
        className="soundboard-button btn btn-default"
        onClick={this.click}>
        {this.props.clipName}
      </button>
    );
  }
}

SoundboardButton.propTypes = {
  handleClick: React.PropTypes.func,
  clipName: React.PropTypes.string,
  fileName: React.PropTypes.string
};

SoundboardButton.defaultProps = {
  handleClick: () => {}
};
