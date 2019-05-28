import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Soundboard from 'components/Soundboard';
import { ClipData } from 'index.d';

type Clips = {
  meta: ClipData;
};

function App() {
  const [state, setState] = useState<Clips | null>(null);

  useEffect(() => {
    fetch('clips.json')
      .then(res => res.json())
      .then(data => setState({ meta: data }))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="app container">
      {state && state.meta && <Soundboard {...state.meta} />}
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
