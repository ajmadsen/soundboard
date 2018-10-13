import React, { Component } from 'react';
import Soundboard from './components/Soundboard';

class App extends Component {
  state = {};

  componentDidMount() {
    fetch('clips.json')
      .then(resp => resp.json())
      .then(data => this.setState({ data }));
  }

  render() {
    if (!this.state.data) {
      return 'Loading...';
    }
    return <Soundboard {...this.state.data} />;
  }
}

export default App;
