import {fetchData} from './index';

describe('Test async actions', () => {
  test('async action fetchData should response the GET method', () => {
    fetchData().then(response => {
      expect(response.statusCode).toBe(200);
    });
  });
  test('async action should return a non empty objct', () => {
    fetchData()
      .then(response => response)
      .then(response => response.json())
      .then(json => {
        const isJson = typeof json === 'object' && json !== null;
        expect(isJson).toBeTruthy();
      });
  });
});
