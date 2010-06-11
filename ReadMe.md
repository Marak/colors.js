<h1>colors.js - get color and style in your node.js console like what</h1>

<img src="http://i.imgur.com/goJdO.png" border = "0"/>

       var sys = require('sys');
       var colors = require('./colors');

       sys.puts('hello'.green); // outputs green text

       // from the example.js file
       sys.puts('C'.yellow+'o'.red+'l'.grey+'o'.cyan+'r'.magenta+'s'.magenta+' are '.green + 'fun!'.yellow);
       sys.puts('C'.yellow+'o'.red+'l'.grey+'o'.cyan+'r'.magenta+'s'.magenta+' are '.green + 'fun!'.yellow);
       sys.puts('So '.italic + 'are'.underline + ' styles! '.bold + 'inverse'.inverse); // styles not widely supported
       sys.puts('Chains are also cool.'.bold.italic.underline.red); // styles not widely supported
       
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