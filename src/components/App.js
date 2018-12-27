import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import NavigationBar from './navBar'
import ImageGalery from '../containers/imagegalery'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route  path='/' component={NavigationBar}></Route>
          <Route  path='/gallery' component={ImageGalery}></Route>
          <div className="App">
            
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
