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
                    'red', 'yellow', 'brightYellow', 'brightRed',
                    'brightGreen', 'brightBlue', 'brightWhite', 'brightCyan',
                    'brightMagenta'];

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

assert.equal(colors.stylize("foo", "rainbow"), '\u001b[31mf\u001b[39m\u001b[33mo\u001b[39m\u001b[32mo\u001b[39m');
assert.ok(colors.stylize(s, "america"));
assert.ok(colors.stylize(s, "zebra"));
assert.ok(colors.stylize(s, "trap"));
assert.ok(colors.stylize(s, "random"));

aE(s, 'white', 37);
aE(s, 'grey', 90);
aE(s, 'black', 30);
aE(s, 'blue', 34);
aE(s, 'cyan', 36);
aE(s, 'green', 32);
aE(s, 'magenta', 35);
aE(s, 'red', 31);
aE(s, 'yellow', 33);

aE(s, 'brightWhite', 97);
aE(s, 'brightBlue', 94);
aE(s, 'brightCyan', 96);
aE(s, 'brightGreen', 92);
aE(s, 'brightMagenta', 95);
aE(s, 'brightRed', 91);
aE(s, 'brightYellow', 93);

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

colors.setTheme({custom: ['blue', 'bold', 'underline']});
assert.equal(colors.custom(s),
    '\x1b[4m' + '\x1b[1m' + '\x1b[34m' + s +
  '\x1b[39m' + '\x1b[22m' + '\x1b[24m' );

colors.setTheme({custom: ['red', 'italic', 'inverse']});
assert.equal(colors.custom(s),
    '\x1b[7m' + '\x1b[3m' + '\x1b[31m' + s +
  '\x1b[39m' + '\x1b[23m' + '\x1b[27m' );
