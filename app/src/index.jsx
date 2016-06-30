import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import { Soundboard } from './soundboard/soundboard';

import 'bootstrap/dist/css/bootstrap.min.css';
import './soundboard/soundboard.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: {}
    };
  }
  componentWillMount() {
    $.get({
      url: 'clips.json',
      dataType: 'json',
      success: (data) => this.setState({meta: data}),
      error: (xhr, status, err) => console.log(err)
    });
  }
  render() {
    return (
      <div className="app container">
        <Soundboard {...this.state.meta} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#content')
);
