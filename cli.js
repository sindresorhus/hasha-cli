#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import {hashSync, hashingStream} from 'hasha';

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
	importMeta: import.meta,
	flags: {
		algorithm: {
			type: 'string',
			shortFlag: 'a',
		},
		encoding: {
			type: 'string',
			shortFlag: 'e',
		},
	},
});

const input = cli.input[0];

if (!input && process.stdin.isTTY) {
	console.log('Specify something to hash');
	process.exit(1);
}

if (input) {
	console.log(hashSync(input, cli.flags));
} else {
	process.stdin.pipe(hashingStream(cli.flags)).pipe(process.stdout);
}
