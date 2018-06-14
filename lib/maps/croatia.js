var colors = require('../colors');

module['exports'] = (function() {
  return function(letter, i, exploded) {
    if (letter === ' ') return letter;
    switch (i%2) {
      case 0: return colors.bgRed(colors.white(letter));
      case 1: return colors.bgWhite(colors.red(letter));
    }
  };
})();
