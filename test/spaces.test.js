const tpl = require('..')

describe('Spaces around var', () => {

    test('Spaces in front', () => {
        expect(tpl('Hello, ${ who}', {who:'World'})).toBe('Hello, World');
    });

    test('Spaces on the end', () => {
        expect(tpl('Hello, ${who }', {who:'World'})).toBe('Hello, World');
    });

    test('Spaces on both sides', () => {
        expect(tpl('Hello, ${ who }', {who:'World'})).toBe('Hello, World');
    });

    test('Multiple spaces', () => {
        expect(tpl('Hello, ${   who  }', {who:'World'})).toBe('Hello, World');
    });

    test('Tabs', () => {
        expect(tpl('Hello, ${\twho\t}', {who:'World'})).toBe('Hello, World');
    });

    test('Tabs & spaces', () => {
        expect(tpl('Hello, ${\t who \t}', {who:'World'})).toBe('Hello, World');
    });

});