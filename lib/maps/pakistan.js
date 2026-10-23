module['exports'] = function(colors) {
  return function(letter, i, exploded) {
    var totalLetters = exploded.length;
    var threshold = Math.floor(totalLetters * 0.3);

    if (i < threshold) {
      return colors.white(letter);
    } else {
      return colors.green(letter);
    }
  };
};
