module['exports'] = function(colors) {
  // RoY G BiV
  var rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  return function(letter, i, exploded) {
    if (letter === ' ') {
      return letter;
    }
    return colors[rainbowColors[i++ % rainbowColors.length]](letter);
  };
};

