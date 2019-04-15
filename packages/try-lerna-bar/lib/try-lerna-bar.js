'use strict';

const foo = require('@bahmutov/try-lerna-foo')
const result = 'bar + foo=' + foo;

module.exports = result

console.log('try-lerna-bar', result)
