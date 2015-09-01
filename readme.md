# [<img src="https://rawgit.com/sindresorhus/hasha/master/media/logo.svg" width="150" align="left" alt="hasha-cli">](https://github.com/sindresorhus/hasha)-cli [![Build Status](https://travis-ci.org/sindresorhus/hasha-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/hasha-cli)

> Hashing made simple. Get the hash of text or stdin.


## Install

```
$ npm install --global hasha-cli
```


## Usage

```
$ hasha --help

  Usage
    $ hasha <text>
    $ cat <file> | hasha

  Options
    -a, --algorithm  Cipher algorithm: md5,sha1,sha256,sha512   [Default: sha512]
    -e, --encoding   Output encoding: hex,base64,buffer,binary  [Default: hex]

  Examples
    $ hasha unicorn --algorithm=md5
    1abcb33beeb811dca15f0ac3e47b88d9
```


## Related

- [hasha](https://github.com/sindresorhus/hasha) - API for this module


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
