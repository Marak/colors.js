<h1>colors.js - get color and style in your nodejs console like what</h1>

       var sys = require('sys');
       var colors = require('colors');

       sys.puts('Colors '.green + 'are '.magenta + 'fun!'.blue);
       sys.puts('So '.bold + 'are'.underline + ' styles!'.italic); // styles don't work in standard Mac OS Terminal.app
       sys.puts('Chains are also cool.'.bold.underline.red); // styles dont't work in standard Mac OS Terminal.app


<h2>colors and styles!</h2>
- bold
- italic
- underline
- inverse
- yellow
- cyan
- white
- magenta
- green
- red
- grey
- blue


### Authors 

#### Alexis Sellier (cloudhead) , Marak Squires