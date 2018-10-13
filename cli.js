#!/usr/bin/env node
'use strict';
const meow = require('meow');
const hasha = require('hasha');

const cli = meow(`
	Usage
	  $ hasha <text>
	  $ cat <file> | hasha

	Options
	  --algorithm, -a  Cipher algorithm: md5,sha1,sha256,sha512   [Default: sha512]
	  --encoding, -e   Output encoding: hex,base64,buffer,binary  [Default: hex]

	Example
	  $ hasha unicorn --algorithm=md5
	  1abcb33beeb811dca15f0ac3e47b88d9
`, {
	flags: {
		algorithm: {
			type: 'string',
			alias: 'a'
		},
		encoding: {
			type: 'string',
			alias: 'e'
		}
	}
});

const input = cli.input[0];

if (!input && process.stdin.isTTY) {
	console.log('Specify something to hash');
	process.exit(1);
}

if (input) {
	console.log(hasha(input, cli.flags));
} else {
	process.stdin.pipe(hasha.stream(cli.flags)).pipe(process.stdout);
}
