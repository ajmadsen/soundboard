import React, { useCallback, useEffect, useState, useContext } from 'react';

import { clipEndAction } from 'actions/Soundboard';
import SoundboardContext from 'contexts/Soundboard';

export type Props = {
  id: number;
  fileName: string;
};

function AudioClip(props: Props) {
  const [ref, setRef] = useState<HTMLSourceElement | null>(null);

  const { dispatch } = useContext(SoundboardContext);

  const onRef = useCallback(ref => {
    if (ref) setRef(ref);
  }, []);

  const onError = useCallback(
    (e: ErrorEvent) => {
      console.error(e);
      dispatch(clipEndAction(props.id));
    },
    [props.id, dispatch]
  );

  const onEnded = useCallback(() => {
    dispatch(clipEndAction(props.id));
  }, [props.id, dispatch]);

  useEffect(() => {
    if (!ref) return;

    const el = ref;

    el.addEventListener('error', onError);
    return () => {
      el.removeEventListener('error', onError);
    };
  }, [ref, onError]);

  return (
    <audio onEnded={onEnded} autoPlay={true}>
      <source ref={onRef} src={props.fileName} type="audio/mp3" />
    </audio>
  );
}

export default AudioClip;
