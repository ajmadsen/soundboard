import { createContext, Dispatch } from 'react';

import { SoundboardAction } from 'actions/Soundboard';

type ContextType = {
  dispatch: Dispatch<SoundboardAction>;
};

const defaultValue: ContextType = {
  dispatch: (_: SoundboardAction) => {}
};

export const SoundboardContext = createContext(defaultValue);

export default SoundboardContext;
