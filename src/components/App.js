import React, { Component } from 'react';

import NavigationBar from './navBar'
import ImageGalery from '../containers/imagegalery'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <ImageGalery/>
      </div>
    );
  }
}

export default App;
