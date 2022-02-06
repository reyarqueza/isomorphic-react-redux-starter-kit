import React from 'react';
import ReactDOMServer from 'react-dom/server';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';

import App from './jsx/App.jsx';
import props from '../public/json/api.json';

import wrapper from './wrapper';

import app from './app';
import request from 'supertest';

describe('Test the root path', () => {
  test('/ should response the GET method', () => {
    return request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test('/api should response the GET method', () => {
    return request(app)
      .get('/api')
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});
