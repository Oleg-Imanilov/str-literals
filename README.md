# str-literals

Dynamic string template with simple expressions support. 

The idea to use format similar to JS template literals, but be able to get it dynamically.

You can use all global functions and objects unless you don't using `"{"` and/or `"}"` inside `"${}"`.

> Be carreful when using this module, expression evaluation using `eval` function.   

```
npm install str-literals
```


# Examples
## Simple variable:

```javascript
const template = require('str-literals')
// const who = 'World'
// console.log( `Hello, ${who}!`)
console.log( template('Hello, ${who}!', {who: 'World'}))
```
Output:
```
Hello, World!
```

## No variables:

```javascript
const template = require('str-literals')
console.log( template('Total: ${1+1}') )
```
Output:
```
Total: 2
```


## JS Array expression
```javascript
const template = require('str-literals')
console.log( template('Note: ${arr.join("")}', {arr: ['Hello, ', 'World', '!']}))
```
Output:
```
Note: Hello, World!
```

## Numeric expression
```javascript
const template = require('str-literals')
console.log( template('Total : ${10 + a - b}', {a: 10, b: 5}))
```
Output:
```
Total : 15
```


# License

MIT © [Oleg Imanilov](https://github.com/Oleg-Imanilov/str-literals#readme)
