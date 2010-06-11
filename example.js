var sys = require('sys');
var colors = require('./colors');

sys.puts('C'.yellow+'o'.red+'l'.grey+'o'.cyan+'r'.magenta+'s'.magenta+' are '.green + 'fun!'.yellow);
sys.puts('So '.italic + 'are'.underline + ' styles! '.bold + 'inverse'.inverse); // styles not widely supported
sys.puts('Chains are also cool.'.bold.italic.underline.red); // styles not widely supported
