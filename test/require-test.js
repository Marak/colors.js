var assert = require('assert'),
    fs = require('fs'),
    colors = require('../colors');

//
// Test to ensure that a second require of the same file
// throws no errors
//
fs.writeFileSync('colors-copy.js', fs.readFileSync('colors.js'));
require('../colors-copy');
assert.equal(true, true);
fs.unlinkSync('colors-copy.js');