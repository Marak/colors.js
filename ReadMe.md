<h1>colors.js - get color and style in your node.js console like what</h1>

<img src="http://i.imgur.com/goJdO.png" border = "0"/>

       var sys = require('sys');
       var colors = require('./colors');

       sys.puts('hello'.green); // outputs green text
       sys.puts('i like cake and pies'.underline.red) // outputs red underlined text
       sys.puts('inverse the color'.inverse); // inverses the color
       sys.puts('OMG Rainbows!'.rainbow); // rainbow (ignores spaces)

<h2>Output modes</h2>
colors.js support three different output modes:
* `console` (default) to use ANSI escape sequences suitable for terminals
* `browser` wrap strings with a colored HTML span
* `none` return the string as is

Ex:
       require('colors').mode = 'none';


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

#### Alexis Sellier (cloudhead) , Marak Squires , Justin Campbell, Dustin Diaz (@ded)
