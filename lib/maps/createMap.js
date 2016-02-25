var colors = require('../colors');

function chooseIndex(i, colorsArray) {
  return i % colorsArray.length;
}

module.exports = function(colorsArray, indexChooser) {
  indexChooser = indexChooser || chooseIndex;
  var map = function(letter, i, exploded) {
    if (letter === " ") {
      return letter;
    } else {
      var method = colors[colorsArray[indexChooser(i, colorsArray)]];
      return method ? method(letter) : letter;
    }
  };
  map.colorsLength = colorsArray.length;
  return map;
}
