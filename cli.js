#!/usr/bin/env node
'use strict';
var meow = require('meow');
var hasha = require('hasha');

var cli = meow({
	help: [
		'Usage',
		'  $ hasha <text>',
		'  $ cat <file> | hasha',
		'',
		'Options',
		'  -a, --algorithm  Cipher algorithm: md5,sha1,sha256,sha512   [Default: sha512]',
		'  -e, --encoding   Output encoding: hex,base64,buffer,binary  [Default: hex]',
		'',
		'Examples',
		'  $ hasha unicorn --algorithm=md5',
		'  1abcb33beeb811dca15f0ac3e47b88d9'
	]
}, {
	alias: {
		a: 'algorithm',
		e: 'encoding'
	}
});

var input = cli.input[0];

if (!input && process.stdin.isTTY) {
	console.log('Please specify something to hash');
	process.exit(1);
}

if (input) {
	console.log(hasha(input, cli.flags));
} else {
	process.stdin.pipe(hasha.stream(cli.flags)).pipe(process.stdout);
}
