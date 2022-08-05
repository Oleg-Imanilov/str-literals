# js-template

Dynamic string template with simple expressions support. 

The idea to use format similar to JS template literals, but be able to get it dynamically.

You can use all global functions and objects unless you don't using `"{"` and/or `"}"` inside `"${}"`.

> Be carreful when using this module, expression evaluation using `eval` function.   

# Examples
## Simple variable:

```
const template = require('js-template')
console.log( template('Hello, ${who}!', {who: 'World'}))
```
Output:
```
Hello, World!
```

## JS Array expression
```
const template = require('js-template')
console.log( template('Note: ${arr.join('')}', {arr: ['Hello, ', 'World', '!']}))
```
Output:
```
Note: Hello, World!
```

## Numeric expression
```
const template = require('js-template')
console.log( template('Total : ${10 + a - b}', {a: 10, b: 5}))
```
Output:
```
Total : 15
```


