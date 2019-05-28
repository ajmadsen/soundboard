type ClipPlayAction = {
  type: 'CLIP:PLAY';
  payload: {
    fileName: string;
  };
};

export function clipPlayAction(fileName: string): ClipPlayAction {
  return {
    type: 'CLIP:PLAY',
    payload: {
      fileName
    }
  };
}

type ClipEndAction = {
  type: 'CLIP:END';
  payload: {
    key: number;
  };
};

export function clipEndAction(key: number): ClipEndAction {
  return {
    type: 'CLIP:END',
    payload: {
      key
    }
  };
}

export type SoundboardAction = ClipPlayAction | ClipEndAction;
