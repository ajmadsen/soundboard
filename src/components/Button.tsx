import React, { useCallback, useContext } from 'react';

import { clipPlayAction } from 'actions/Soundboard';
import SoundboardContext from 'contexts/Soundboard';

import './Button.css';

export type Props = {
  clipName: string;
  fileName: string;
};

function Button({ clipName, fileName }: Props) {
  const { dispatch } = useContext(SoundboardContext);

  const onClick = useCallback(() => {
    dispatch(clipPlayAction(fileName));
  }, [fileName, dispatch]);

  return (
    <button
      className="soundboard-button btn btn-outline-dark"
      onClick={onClick}
    >
      {clipName}
    </button>
  );
}

export default Button;
