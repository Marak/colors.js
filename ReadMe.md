<h1>colors.js - get color in your nodejs console like what</h1>

       var sys = require('sys');
       var colors = require('colors');
       sys.puts('whats up dog'.green);
       sys.puts('i cant allow you to do that dave'.red);
       var str = "I".green + " Like".yellow + " Colors!".grey;
       sys.puts(str);
       
       
       
optional NPM install : npm install colors