const tpl = require('..')

test('Sum', () => {
  expect(tpl('Hello, ${a + b}', {a:10, b:20}))
    .toBe('Hello, 30');
});

test('Concatinate', () => {
    expect(tpl('Hello, ${a + b}', {a:'Wo', b:'rld'}))
      .toBe('Hello, World');
})

test('Array function', () => {
  expect(tpl('Members: ${arr.join(", ")}', {arr:['Harry', 'Ron', 'Hermione']}))
    .toBe('Members: Harry, Ron, Hermione');
})

test('JSON function', () => {
  expect(tpl('Document: ${JSON.stringify(result)}', {result: { Members: ['Harry', 'Ron', 'Hermione']}}))
    .toBe('Document: {"Members":["Harry","Ron","Hermione"]}');
})