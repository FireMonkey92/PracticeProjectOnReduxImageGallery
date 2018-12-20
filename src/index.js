import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './components/App';
import reducers from './reducers';
import promiseMiddleware from 'redux-promise';

// Setting up the redux in App

import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';

const CreateStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);


ReactDOM.render(
    <Provider store={CreateStoreWithMiddleware(reducers)}>
    <App />
    </Provider>
    , document.getElementById('root'));
