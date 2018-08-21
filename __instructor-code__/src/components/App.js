import React, { Component } from 'react';
import Home from './Home/Home';
import About from './About/About';

class App extends Component {
  componentDidMount() {
    window.addEventListener('hashchange', () => this.forceUpdate());
  }
  
  render() {
    return (
      <div>
        This is App.js
        <div>
          <a href="/#">Home</a>
          <a href="/#/about">About</a>
        </div>
        {window.location.hash === '#/about' ? <About /> : <Home />}
      </div>
    );
  }
}

export default App;
