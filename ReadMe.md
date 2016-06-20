# THIS IS A FORK, ADDS JETBRAINS IDE COMPATIBILITY

> This is a fork of the original "colors" module that fixes an issue with color output in JetBrains
 IDE's. A pull request (https://github.com/Marak/colors.js/pull/150) has been made on the original
 repo but has not yet been merged. While we wait for merge, this repo will exist to allow a drop-in
 replacement with JetBrains support.
 
You can use this forked version of colors as a drop-in replacement via:

```bash
npm install irrelon-colors
```

# colors.js [![Build Status](https://travis-ci.org/Marak/colors.js.svg?branch=master)](https://travis-ci.org/Marak/colors.js)

## get color and style in your node.js console

![Demo](https://raw.githubusercontent.com/Marak/colors.js/master/screenshots/colors.png)

## Installation

    npm install irrelon-colors

## colors and styles!

### text colors

  - black
  - red
  - green
  - yellow
  - blue
  - magenta
  - cyan
  - white
  - gray
  - grey

### background colors

  - bgBlack
  - bgRed
  - bgGreen
  - bgYellow
  - bgBlue
  - bgMagenta
  - bgCyan
  - bgWhite

### styles

  - reset
  - bold
  - dim
  - italic
  - underline
  - inverse
  - hidden
  - strikethrough

### extras

  - rainbow
  - zebra
  - america
  - trap
  - random


## Usage

By popular demand, `colors` now ships with two types of usages!

The super nifty way

```js
var colors = require('irrelon-colors');

console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

```

or a slightly less nifty way which doesn't extend `String.prototype`

```js
var colors = require('irrelon-colors/safe');

console.log(colors.green('hello')); // outputs green text
console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text
console.log(colors.inverse('inverse the color')); // inverses the color
console.log(colors.rainbow('OMG Rainbows!')); // rainbow
console.log(colors.trap('Run the trap')); // Drops the bass

```

I prefer the first way. Some people seem to be afraid of extending `String.prototype` and prefer the second way. 

If you are writing good code you will never have an issue with the first approach. If you really don't want to touch `String.prototype`, the second usage will not touch `String` native object.

## Disabling Colors

To disable colors you can pass the following arguments in the command line to your application:

```bash
node myapp.js --no-color
```

## Console.log [string substitution](http://nodejs.org/docs/latest/api/console.html#console_console_log_data)

```js
var name = 'Marak';
console.log(colors.green('Hello %s'), name);
// outputs -> 'Hello Marak'
```

## Custom themes

### Using standard API

```js

var colors = require('irrelon-colors');

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

// outputs red text
console.log("this is an error".error);

// outputs yellow text
console.log("this is a warning".warn);
```

### Using string safe API

```js
var colors = require('irrelon-colors/safe');

// set single property
var error = colors.red;
error('this is red');

// set theme
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

// outputs red text
console.log(colors.error("this is an error"));

// outputs yellow text
console.log(colors.warn("this is a warning"));

```

### Combining Colors

```javascript
var colors = require('irrelon-colors');

colors.setTheme({
  custom: ['red', 'underline']
});

console.log('test'.custom);
```

*Protip: There is a secret undocumented style in `colors`. If you find the style you can summon him.*
