import React, { useReducer, useMemo } from 'react';

import Category from 'components/Category';
import AudioClip from 'components/AudioClip';
import SoundboardContext from 'contexts/Soundboard';
import { Reducer } from 'reducers/Soundboard';

import { Category as CategoryType } from 'index.d';

import './Soundboard.css';

type Props = {
  name: string;
  categories: CategoryType[];
};

export function Soundboard(props: Props) {
  const [state, dispatch] = useReducer(Reducer, { currentlyPlaying: [] });

  const context = useMemo(() => ({ dispatch }), [dispatch]);

  return (
    <SoundboardContext.Provider value={context}>
      <div className="soundboard">
        <h1>{props.name}</h1>
        {props.categories.map(obj => (
          <Category key={obj.name} categoryName={obj.name} clips={obj.clips} />
        ))}
        <div style={{ display: 'none' }}>
          {state.currentlyPlaying.map(obj => (
            <AudioClip key={obj.key} fileName={obj.file} id={obj.key} />
          ))}
        </div>
      </div>
    </SoundboardContext.Provider>
  );
}

Soundboard.defaultProps = {
  name: 'Soundboard'
};

export default Soundboard;
