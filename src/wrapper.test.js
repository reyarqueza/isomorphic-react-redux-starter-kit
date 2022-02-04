import wrapper from './wrapper';

describe('wrapper returns html', () => {
  test('wrapper is not empty', () => {
    expect(wrapper('<h1>test</h1>', {test: true})).toBeTruthy();
  });
});
