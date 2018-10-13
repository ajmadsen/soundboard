import React from 'react';
import PropTypes from 'prop-types';

const Clip = ({ name, file, className, onClick }) => {
  return (
    <button
      type="button"
      className={'btn ' + className}
      onClick={() => onClick(file)}
    >
      {name}
    </button>
  );
};

Clip.propTypes = {
  name: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired
};

export default Clip;
