var sys = require('sys');
var colors = require('./colors');

//colors.mode = "browser";

var test = colors.red("hopefully colorless output");
sys.puts('Rainbows are fun!'.rainbow);
sys.puts('So '.italic + 'are'.underline + ' styles! '.bold + 'inverse'.inverse); // styles not widely supported
sys.puts('Chains are also cool.'.bold.italic.underline.red); // styles not widely supported
//sys.puts('zalgo time!'.zalgo);
sys.puts(test.stripColors);
sys.puts("a".grey + " b".black);

sys.puts(colors.rainbow('Rainbows are fun!'));
sys.puts(colors.italic('So ') + colors.underline('are') + colors.bold(' styles! ') + colors.inverse('inverse')); // styles not widely supported
sys.puts(colors.bold(colors.italic(colors.underline(colors.red('Chains are also cool.'))))); // styles not widely supported
//sys.puts(colors.zalgo('zalgo time!'));
sys.puts(colors.stripColors(test));
sys.puts(colors.grey("a") + colors.black(" b"));

