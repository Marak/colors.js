var createMap = require('./createMap');

module['exports'] = createMap(['underline', 'inverse', 'grey', 'yellow', 'red', 'green', 'blue', 'white', 'cyan', 'magenta'], function(i, available) {
    return Math.round(Math.random() * (available.length - 1));
});
