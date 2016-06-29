import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { Soundboard } from './soundboard/soundboard';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="app container">
        <Soundboard {...PROPS} />
      </div>
    );
  }
}

const PROPS = {
  name: 'Soundboard',
  categories: [
    {
      name: 'Anger',
      clips: [
        {
          name: 'GAH',
          file: 'boom.mp3'
        }
      ]
    }
  ]
};

ReactDOM.render(
  <App />,
  document.querySelector('#content')
);
