// colors.js - Alexis Sellier (cloudhead) , Marak Squires
// MIT yo. copy pasta us some credit plz
['bold', 'underline', 'italic', 'inverse', 'grey', 'yellow', 'red', 'green', 'blue', 'white', 'cyan', 'magenta'].forEach(function (style) {
    Object.defineProperty(String.prototype, style, {
        get: function () {
            return stylize(this, style);
        }
    });
});

function stylize(str, style) {
    var styles = {
        'bold'      : [1,  22],
        'italic'    : [3,  23],
        'underline' : [4,  24],
        'yellow'    : [33, 39],
        'cyan'      : [36, 39],
        'white'     : [37, 39],
        'green'     : [32, 39],
        'red'       : [31, 39],
        'grey'      : [90, 39],
        'blue'      : [34, 39],
        'magenta'   : [35, 39],
        'inverse'   : [7, 27]
    };
    return '\033[' + styles[style][0] + 'm' + str +
           '\033[' + styles[style][1] + 'm';
};

