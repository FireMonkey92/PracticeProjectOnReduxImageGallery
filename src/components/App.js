import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavigationBar from './navBar';
import ImageGalery from '../containers/imagegalery';
import ImageSlider from '../containers/imageSlider';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route  path='/' component={NavigationBar}></Route>
          <Route  path='/gallery' component={ImageGalery}></Route>
          <Route  path='/slider' component={ImageSlider}></Route>
          <div className="App">
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
