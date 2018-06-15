var colors = require('../colors');

module['exports'] = (function() {
  return function(letter, i, exploded) {
    if (letter === ' ') return letter;
    switch (i%3) {
      case 0: return colors.black.bgGreen(letter);
      case 1: return colors.black.bgWhite(letter);
      case 2: return colors.black.bgRed(letter);
    }
  };
})();