/*
 colors.js Copyright (c) 2010 Marak Squires, Alexis Sellier (cloudhead)
           Copyright (c) 2013 Daniel Wirtz <dcode@dcode.io>

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
// NODE (dcode): This is a cored version for primary use in node. Zalgo has left the building.
(function (global) {
    'use strict';
    
    /**
     * colors namespace.
     * @namespace
     */
    var colors = {};

    /**
     * Colors mode. To generate html in node, use colors.setTheme("html") instead.
     * @type {string} May be "console", "browser" or "none".
     * @expose
     */
    colors.mode = "console";

    /**
     * Whether running in a headless environment like node.js or not.
     * @type {boolean}
     * @expose
     */
    colors.headless = typeof global['window'] === 'undefined';

    /**
     * All themes we know about. Contains only the "default" theme by default.
     * @type {Object.<string,!Object>}
     * @expose
     */
    colors.themes = {};

    /**
     * Terminal colors.
     * @type {Object.<string,Array.<string>>}
     */
    var consoleStyles = {
        'bold': ['\x1B[1m', '\x1B[22m'],
        'italic': ['\x1B[3m', '\x1B[23m'],
        'underline': ['\x1B[4m', '\x1B[24m'],
        'inverse': ['\x1B[7m', '\x1B[27m'],
        'strikethrough': ['\x1B[9m', '\x1B[29m'],
        'white': ['\x1B[37m', '\x1B[39m'],
        'grey': ['\x1B[90m', '\x1B[39m'],
        'black': ['\x1B[30m', '\x1B[39m'],
        'blue': ['\x1B[34m', '\x1B[39m'],
        'cyan': ['\x1B[36m', '\x1B[39m'],
        'green': ['\x1B[32m', '\x1B[39m'],
        'magenta': ['\x1B[35m', '\x1B[39m'],
        'red': ['\x1B[31m', '\x1B[39m'],
        'yellow': ['\x1B[33m', '\x1B[39m']
    };

    /**
     * HTML.
     * @type {Object.<string,Array.<string>>}
     */
    var browserStyles = {
        'bold' : ['<b>', '</b>'],
        'italic' : ['<i>', '</i>'],
        'underline' : ['<u>', '</u>'],
        'inverse' : ['<span style="background-color:black;color:white;">', '</span>'],
        'strikethrough' : ['<del>', '</del>'],
        'white' : ['<span style="color:white;">', '</span>'],
        'grey' : ['<span style="color:grey;">', '</span>'],
        'black' : ['<span style="color:black;">', '</span>'],
        'blue' : ['<span style="color:blue;">', '</span>'],
        'cyan' : ['<span style="color:cyan;">', '</span>'],
        'green' : ['<span style="color:green;">', '</span>'],
        'magenta' : ['<span style="color:magenta;">', '</span>'],
        'red' : ['<span style="color:red;">', '</span>'],
        'yellow' : ['<span style="color:yellow;">', '</span>']
    };

    /**
     * Prototypes the string object to have additional properties that wraps the current string in colors when accessed.
     * @param {string} color Color / property name
     * @param {function(string):string} func Wrapper function
     * @private
     */
    function addProperty(color, func) {
        // Exposed on top of the namespace
        colors[color] = function(str) {
            return func.apply(str);
        };
        // And on top of all strings
        String.prototype.__defineGetter__(color, func);
    }

    /**
     * Applies a style to a string.
     * @param {string} str String to stylize
     * @param {string} style Style to apply
     * @returns {string}
     * @private
     */
    function stylize(str, style) {
        if (colors.mode == 'console') {
            return consoleStyles[style][0] + str + consoleStyles[style][1];
        } else if (colors.mode == 'browser') {
            return browserStyles[style][0] + str + browserStyles[style][1];
        }
        return str+'';
    }

    /**
     * Rainbow colors.
     * @type {Array.<string>}
     * @const
     * @private
     */
    var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta'];

    /**
     * String properties that should never be overwritten.
     * @type {Array.<string>}
     * @const
     */
    var prototypeBlacklist = [
        '__defineGetter__', '__defineSetter__', '__lookupGetter__', '__lookupSetter__', 'charAt', 'constructor',
        'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf', 'charCodeAt',
        'indexOf', 'lastIndexof', 'length', 'localeCompare', 'match', 'replace', 'search', 'slice', 'split', 'substring',
        'toLocaleLowerCase', 'toLocaleUpperCase', 'toLowerCase', 'toUpperCase', 'trim', 'trimLeft', 'trimRight'
    ];

    /**
     * Applies a theme.
     * @param {!Object} theme Theme to apply
     */
    function applyTheme(theme) {
        Object.keys(theme).forEach(function(prop) {
            if (prototypeBlacklist.indexOf(prop) >= 0) {
                return;
            }
            if (typeof theme[prop] == 'string') {
                addProperty(prop, function () {
                    return colors[theme[prop]](this);
                });
            } else {
                addProperty(prop, function () {
                    var ret = this;
                    for (var t=0; t<theme[prop].length; t++) {
                        ret = colors[theme[prop][t]](ret);
                    }
                    return ret;
                });
            }
        });
    }

    /**
     * Sets another theme.
     * @param {string|!Object} theme Theme name or 
     * @returns {Object|Error|undefined}
     * @expose
     */
    colors.setTheme = function(theme) {
        if (typeof theme === 'string') {
            if (typeof colors.themes[theme] != 'undefined') {
                applyTheme(colors.themes[theme]);
                return colors.themes[theme];
            }
            /* else */ try /* to load it */ {
                colors.themes[theme] = require(theme);
                applyTheme(colors.themes[theme]);
                return colors.themes[theme];
            } catch (err) {
                return err;
            }
        } else {
            applyTheme(theme);
        }
    };

    /**
     * Extends a mapper with the current index inside the string as a second argument.
     * @param {function(string, number):string} map Sequencing function
     * @returns {function(string):string} Wrapped sequencer
     * @private
     */
    function sequencer(map) {
        return function () {
            if (this == undefined) return "";
            var i=0;
            return String.prototype.split.apply(this, [""]).map(map).join("");
        };
    }

    /**
     * Adds a sequencer that generates output depending on the index inside a string.
     * @param {string} name Sequencer name
     * @param {function(string, number):string} map Mapping function called for every character as the first and the
     *  current index of that character as the second argument.
     * @expose
     */
    colors.addSequencer = function (name, map) {
        addProperty(name, sequencer(map));
    };
    
    // Apply defaults
    ['bold', 'underline', 'strikethrough', 'italic', 'inverse', 'grey', 'black', 'yellow', 'red', 'green', 'blue', 'white', 'cyan', 'magenta'].forEach(
        function (style) {
            addProperty(style, function () {
                return stylize(this, style);
            });
        }
    );

    colors.addSequencer('rainbow', function(letter, i) {
        return letter === " " ? letter : stylize(letter, rainbowColors[i++ % rainbowColors.length]);
    });
    colors.addSequencer('zebra', sequencer(function (letter, i) {
        return i % 2 === 0 ? letter : letter.inverse;
    }));
    addProperty('stripColors', function () {
        if (colors.mode == 'console') {
            return this.replace(/\x1B\[\d+m/g, '');
        } else if (colors.mode == 'browser') {
            return this.replace(/<\/?(?:span|u|i|u|del)\b[^>]*>/g, '');
        }
        return this+'';
    });
    
    if (typeof module !== 'undefined' && module['exports']) {
        module.exports = colors;
    } else if (typeof define !== 'undefined' && define.amd) {
        define("colors", function() {
            return colors;
        });
    } else {
        colors.mode = 'browser';
        global['colors'] = colors;
    }

})(this);
