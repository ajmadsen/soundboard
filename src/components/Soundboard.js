import React from 'react';
import PropTypes from 'prop-types';

import Section from './Section';

const Soundboard = ({ name = '', categories = [] }) => {
  const sections = categories.map(({ clips, name }) => (
    <div className="row py-2">
      <div className="col">
        <Section key={name} clips={clips} name={name} />
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-2">{name}</h1>
        </div>
      </div>
      {sections}
    </div>
  );
};

Soundboard.propTypes = {
  name: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      clips: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          file: PropTypes.string.isRequired
        })
      ).isRequired
    })
  ).isRequired
};

export default Soundboard;
