var assert = require('assert');
var colors = require('../lib/index');

var s = 'string';

function a(s, code) {
  return '\x1B[' + code.toString() + 'm' + s + '\x1B[39m';
}

function aE(s, color, code) {
  assert.equal(s[color], a(s, code));
  assert.equal(colors[color](s), a(s, code));
  assert.equal(s[color], colors[color](s));
  assert.equal(s[color].strip, s);
  assert.equal(s[color].strip, colors.strip(s));
}

var stylesColors = ['white', 'black', 'blue', 'cyan', 'green', 'magenta',
  'red', 'yellow'];
// eslint-disable-next-line
var stylesAll = stylesColors.concat(['bold', 'italic', 'underline',
  'inverse', 'rainbow']);

colors.mode = 'console';
assert.equal(s.bold, '\x1B[1m' + s + '\x1B[22m');
assert.equal(s.italic, '\x1B[3m' + s + '\x1B[23m');
assert.equal(s.underline, '\x1B[4m' + s + '\x1B[24m');
assert.equal(s.strikethrough, '\x1B[9m' + s + '\x1B[29m');
assert.equal(s.inverse, '\x1B[7m' + s + '\x1B[27m');

assert.ok(s.rainbow);

aE(s, 'white', 37);
aE(s, 'grey', 90);
aE(s, 'black', 30);
aE(s, 'blue', 34);
aE(s, 'cyan', 36);
aE(s, 'green', 32);
aE(s, 'magenta', 35);
aE(s, 'red', 31);
aE(s, 'yellow', 33);

assert.equal(s, 'string');

var testStringWithNewLines = s + '\n' + s;

// single style
assert.equal(testStringWithNewLines.red, '\x1b[31m' + s + '\n' + s +
  '\x1b[39m');

var testStringWithNewLinesStyled = s.underline + '\n' + s.bold;

// nested styles
assert.equal(testStringWithNewLinesStyled.red,
  '\x1b[31m' + '\x1b[4m' + s + '\x1b[24m' + '\n' + '\x1b[1m' + s +
  '\x1b[22m' + '\x1b[39m');

colors.setTheme({error: 'red'});

assert.equal(typeof ('astring'.red), 'string');
assert.equal(typeof ('astring'.error), 'string');

assert.equal(s, 'string');
