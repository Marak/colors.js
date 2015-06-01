var assert = require('assert'),
    colors = require('../lib/index');

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

function h(s, color) {
  return '<span style="color:' + color + ';">' + s + '</span>';
}

var stylesColors = ['white', 'black', 'blue', 'cyan', 'green', 'magenta', 'red', 'yellow',
                    'brightYellow', 'brightRed', 'brightGreen', 'brightBlue', 'brightWhite',
                    'brightCyan', 'brightMagenta'];
var stylesAll = stylesColors.concat(['bold', 'italic', 'underline', 'inverse', 'rainbow']);

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

aE(s, 'brightWhite', 97);
aE(s, 'brightBlue', 94);
aE(s, 'brightCyan', 96);
aE(s, 'brightGreen', 92);
aE(s, 'brightMagenta', 95);
aE(s, 'brightRed', 91);
aE(s, 'brightYellow', 93);

assert.equal(s, 'string');

colors.setTheme({error:'red'});

assert.equal(typeof("astring".red),'string');
assert.equal(typeof("astring".error),'string');

