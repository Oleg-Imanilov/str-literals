const tpl = require('..')

test('Empty values ', () => {
    const result = `Hello, ${666}`
    expect(tpl('Hello, ${666}', {}))
        .toBe(result);
});

test('No values ', () => {
    const result = `Hello, ${666}`
    expect(tpl('Hello, ${666}'))
        .toBe(result);
});
