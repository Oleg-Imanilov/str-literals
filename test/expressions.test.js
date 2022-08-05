const tpl = require('..')

test('Sum', () => {
  const a = 10
  const b = 20
  const result = `Hello, ${a + b}`

  expect(tpl('Hello, ${a + b}', { a, b }))
    .toBe(result);
});

test('Concatinate', () => {
  const a = 'Wo'
  const b = 'rld'
  const result = `Hello, ${a + b}`

  expect(tpl('Hello, ${a + b}', { a, b }))
    .toBe(result);
})

test('Array function', () => {
  const arr = ['Harry', 'Ron', 'Hermione']
  const result = `Members: ${arr.join(", ")}`

  expect(tpl('Members: ${arr.join(", ")}', { arr }))
    .toBe(result)
})

test('JSON function', () => {
  const data = { Members: ['Harry', 'Ron', 'Hermione'] }
  const result = `Document: ${JSON.stringify(data)}`

  expect(tpl('Document: ${JSON.stringify(data)}', { data }))
    .toBe(result);
})