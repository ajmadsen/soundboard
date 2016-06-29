import React from 'react';

import { SoundboardCategory } from './soundboard-category';

export class Soundboard extends React.Component {
  render() {
    let categories = this.props.categories.map((obj) =>
      <SoundboardCategory key={obj.name} name={obj.name} clips={obj.clips} />
    );
    return (
      <div className="soundboard">
        <h1>{this.props.name}</h1>
        {categories}
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
