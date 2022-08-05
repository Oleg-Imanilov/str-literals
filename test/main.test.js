const tpl = require('..')

test('Simple works', () => {
  expect(tpl('Hello, ${who}', {who:'World'})).toBe('Hello, World');
});
