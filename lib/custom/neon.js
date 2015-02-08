var colors = require('../colors');

var getValidColors = function(clrs) {
    var validColors = [];
    clrs.forEach(function(clr) {
        if(colors[clr]) {
            validColors.push(clr);
        }
    });
    return validColors;
};

module['exports'] = function(str) {
    if(!str) {
        return '';
    }

    var clrs = Array.prototype.slice.call(arguments, 1);

    if(clrs.length == 0) {
        return str.toString();
    }

    var validColors = getValidColors(clrs);
    var chars = str.split('');
    var neonChars = [];

    chars.forEach(function(c) {
        if(c === ' ') {
            neonChars.push(c)
        } else {
          var colorCode = validColors.shift();
          neonChars.push(colors[colorCode](c));
          validColors.push(colorCode);
        }
    });

    return neonChars.join('');
}