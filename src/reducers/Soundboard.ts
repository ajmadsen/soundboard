import { SoundboardAction } from 'actions/Soundboard';

type NowPlaying = {
  key: number;
  file: string;
};

export type State = {
  currentlyPlaying: NowPlaying[];
};

export function Reducer(state: State, action: SoundboardAction): State {
  switch (action.type) {
    case 'CLIP:PLAY':
      return {
        ...state,
        currentlyPlaying: [
          ...state.currentlyPlaying,
          {
            key: Date.now(),
            file: action.payload.fileName
          }
        ]
      };
    case 'CLIP:END':
      return {
        ...state,
        currentlyPlaying: state.currentlyPlaying.filter(
          o => o.key !== action.payload.key
        )
      };
  }
  return state;
}
