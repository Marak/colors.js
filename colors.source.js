/*
colors.js

Copyright (c) 2010

Marak Squires
Alexis Sellier (cloudhead)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var safeColors = require('./safe');

safeColors.transforms.forEach(function(transform) {
  addToStringPrototype(transform, safeColors[transform]);
});

module.exports = safeColors;

var originalAddSequencer = module.exports.addSequencer;
module.exports.addSequencer = function(name) {
    originalAddSequencer.apply(this,arguments)
    addToStringPrototype(name, module.exports[name])
};

function addToStringPrototype(name, fn) {
    String.prototype.__defineGetter__(name, function() {
        return fn(this)
    });
}



var stringPrototypeBlacklist = [
    '__defineGetter__', '__defineSetter__', '__lookupGetter__', '__lookupSetter__', 'charAt', 'constructor',
    'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf', 'charCodeAt',
    'indexOf', 'lastIndexof', 'length', 'localeCompare', 'match', 'replace', 'search', 'slice', 'split', 'substring',
    'toLocaleLowerCase', 'toLocaleUpperCase', 'toLowerCase', 'toUpperCase', 'trim', 'trimLeft', 'trimRight'
];

var originalSetTheme = module.exports.setTheme;
module.exports.setTheme = function (themeArgument) {

    try {
      if (typeof theme === 'string') {
        var theme = require(themeArgument);
      } else {
        var theme = themeArgument;
      }

      var themePropertiesToSet = []
      for(var prop in theme) {
        if (stringPrototypeBlacklist.indexOf(prop) === -1) {
          themePropertiesToSet[prop] = theme[prop]
        } else {
          console.log('warn: '.red + ('String.prototype' + prop).magenta + ' is probably something you don\'t want to override. Ignoring style name');
        }
      }

      originalSetTheme(theme)
      for(var prop in theme) {
        addToStringPrototype(prop, module.exports[prop])
      }

    } catch (err) {
      console.log(err);
      return err;
    }
};