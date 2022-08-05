const tpl = require('..')

test('Simple works', () => {
  const who = 'World'
  const result = `Hello, ${who}`
  expect(tpl('Hello, ${who}', { who }))
    .toBe(result);
});
