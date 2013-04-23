/**
 * @fileoverview Definitions for colors.js.
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */
var colors = function() {};

/**
 * @type {string}
 */
colors.mode;

/**
 * @type {boolean}
 */
colors.headless;

/**
 * @param {string} str
 * @returns {function(this:String)}
 */
colors.color = function(str) {};

/**
 * @type {Object.<string,Object.<string,*>>}
 */
colors.themes;

/**
 * @param {string} name
 * @param {function(string):string} map
 */
colors.addSequencer = function(name, map) {};

/**
 * @param {Object.<string,*>} theme
 * @returns {Object.<string,*>|Error|undefined}
 */
colors.setTheme = function (theme) {};

/**
 * @returns {boolean}
 */
colors.uninstall = function() {};

/**
 * @returns {boolean}
 */
colors.install = function() {};

/**
 * @type {string}
 */
// String.prototype.bold;

/**
 * @type {string}
 */
String.prototype.italic;

/**
 * @type {string}
 */
String.prototype.underline;

/**
 * @type {string}
 */
String.prototype.inverse;

/**
 * @type {string}
 */
String.prototype.strikethrough;

/**
 * @type {string}
 */
String.prototype.white;

/**
 * @type {string}
 */
String.prototype.grey;

/**
 * @type {string}
 */
String.prototype.black;

/**
 * @type {string}
 */
String.prototype.blue;

/**
 * @type {string}
 */
String.prototype.cyan;

/**
 * @type {string}
 */
String.prototype.green;

/**
 * @type {string}
 */
String.prototype.magenta;

/**
 * @type {string}
 */
String.prototype.red;

/**
 * @type {string}
 */
String.prototype.yellow;
