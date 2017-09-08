'use strict';

// script.js
const fs = require('fs');

const text = fs.readFileSync('script.js', 'utf8');
console.log(text);
