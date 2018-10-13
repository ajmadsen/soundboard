import React from 'react';
import PropTypes from 'prop-types';

import Clip from './Clip';

const Section = ({ name, clips }) => {
  const clipEls = clips.map(({ name, file }, idx) => (
    <Clip className="m-1" key={idx} name={name} file={file} />
  ));

  return (
    <div className="card">
      <h5 className="card-header">{name}</h5>
      <div className="card-body d-flex flex-wrap p-2">{clipEls}</div>
    </div>
  );
};

Section.propTypes = {
  name: PropTypes.string.isRequired,
  clips: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      file: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Section;
