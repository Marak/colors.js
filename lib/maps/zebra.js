module.exports = (colors) => {
    let count = 0;
    return function(letter, i, chars) {
    if(letter === ' ') {return letter;}
    else if(count % 2 === 0) {count++; return colors.inverse(letter);
     }else {count++; return letter;} };
  };
