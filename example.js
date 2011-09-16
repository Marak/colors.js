var colors = require('./colors');

//colors.mode = "browser";

var test = colors.red("hopefully colorless output");
console.log('Rainbows are fun!'.rainbow);
console.log('So '.italic + 'are'.underline + ' styles! '.bold + 'inverse'.inverse); // styles not widely supported
console.log('Chains are also cool.'.bold.italic.underline.red); // styles not widely supported
//console.log('zalgo time!'.zalgo);
console.log(test.stripColors);
console.log("a".grey + " b".black);

console.log("Zebras are so fun!".zebra);

console.log(colors.rainbow('Rainbows are fun!'));
console.log(colors.italic('So ') + colors.underline('are') + colors.bold(' styles! ') + colors.inverse('inverse')); // styles not widely supported
console.log(colors.bold(colors.italic(colors.underline(colors.red('Chains are also cool.'))))); // styles not widely supported
//console.log(colors.zalgo('zalgo time!'));
console.log(colors.stripColors(test));
console.log(colors.grey("a") + colors.black(" b"));

colors.addSequencer("america", function(letter, i, exploded) {
	switch(i%3) {
		case 0: return letter.red;
		case 1: return letter.white;
		case 2: return letter.blue;
	}
});

console.log("AMERICA! F--K YEAH!".america);
