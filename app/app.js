import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/js/index';
import {createStore} from 'redux';
import appReducers from './../src/reducers/index';
import {Provider} from 'react-redux';
const store = createStore(appReducers);

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>
, document.getElementById('app')
);