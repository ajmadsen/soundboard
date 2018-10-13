import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Soundboard } from './soundboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: {}
    };
  }
  componentWillMount() {
    fetch('clips.json')
      .then(res => res.json())
      .then(data => this.setState({ meta: data }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="app container">
        <Soundboard {...this.state.meta} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#content'));
