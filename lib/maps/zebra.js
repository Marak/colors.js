module['exports'] = function(colors) {
  return function(letter, i, exploded) {
    if(letter === ' ') return letter;
    return i % 2 === 0 ? letter : colors.inverse(letter);
  };
};
