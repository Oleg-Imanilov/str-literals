const tpl = require('..')


test('Spaces in front', () => {
    const who = 'World'
    const result = `Hello, ${ who}`
    expect(tpl('Hello, ${ who}', { who }))
        .toBe(result);
});

test('Spaces on the end', () => {
    const who = 'World'
    const result = `Hello, ${who }`
    expect(tpl('Hello, ${who }', { who: 'World' }))
        .toBe(result);
});

test('Spaces on both sides', () => {
    const who = 'World'
    const result = `Hello, ${ who }`
    expect(tpl('Hello, ${ who }', { who: 'World' }))
        .toBe(result);
});

test('Multiple spaces', () => {
    const who = 'World'
    const result = `Hello, ${   who  }`
    expect(tpl('Hello, ${   who  }', { who: 'World' }))
        .toBe(result);
});

test('Tabs', () => {
    const who = 'World'
    const result = `Hello, ${   who     }`

    expect(tpl('Hello, ${\twho\t}', { who: 'World' }))
        .toBe(result);
});

test('Tabs & spaces', () => {
    const who = 'World'
    const result = `Hello, ${    who     }`
    expect(tpl('Hello, ${ \t who \t}', { who: 'World' }))
        .toBe(result);
});

