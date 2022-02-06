/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';

import AppContainer from './jsx/AppContainer.jsx';
import reducer from './reducers';

jest.mock('react-dom', () => ({hydrate: jest.fn()}));

// mock the state
const preloadedState = {
  dummyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};
const store = createStore(reducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)));

describe('Application root', () => {
  it('should hydrate without crashing', () => {
    const main = document.createElement('main');
    document.body.appendChild(main);
    require('./client.js');
    expect(ReactDOM.hydrate).toHaveBeenCalled();
  });
});
